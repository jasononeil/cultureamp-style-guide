module Icon.Icon exposing (Config, main, view, img, imgWithDesc, presentation, inheritSize)

import Html exposing (Html, text)
import Html.Attributes exposing (attribute)
import Html.Attributes.Aria as Aria exposing (ariaHidden, ariaLabelledby)
import Svg exposing (svg, use)
import Svg.Attributes exposing (class, viewBox, xlinkHref)
import Icon.SvgAsset exposing (SvgAsset, svgAsset)
import CssModules exposing (css)


view : Config -> SvgAsset -> String -> Html Never
view config svgAsset id =
    let
        (Config { inheritSize, role }) =
            config

        { toString } =
            css "cultureamp-style-guide/components/Icon/Icon.scss"
                { icon = ""
                , inheritSize = ""
                }
    in
        svg
            (List.append
                [ class
                    ([ ( .icon, True )
                     , ( .inheritSize, inheritSize )
                     ]
                        |> List.filter Tuple.second
                        |> List.map Tuple.first
                        |> List.map toString
                        |> String.join " "
                    )
                , viewBox svgAsset.viewBox
                , attribute "focusable" "false" -- work around IE11 making all SVGs focusable. See http://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-4
                ]
                (a11yAttributes config id)
            )
            (List.append
                (a11yElements config id)
                [ use [ xlinkHref ("#" ++ svgAsset.id) ] [] ]
            )


a11yAttributes : Config -> String -> List (Html.Attribute Never)
a11yAttributes (Config { role }) id =
    case role of
        Presentation ->
            [ Aria.role "presentation"
            , ariaHidden True
            ]

        Img { desc } ->
            [ Aria.role "img"
            , ariaLabelledby <|
                case desc of
                    Just _ ->
                        -- read out title and desc together if both are present
                        String.concat [ titleId id, " ", descId id ]

                    Nothing ->
                        titleId id
            ]


a11yElements : Config -> String -> List (Html Never)
a11yElements (Config { role }) id =
    case role of
        Img { title, desc } ->
            [ Svg.title [ Html.Attributes.id (titleId id) ] [ text title ]
            , case desc of
                Just str ->
                    Svg.desc [ Html.Attributes.id (descId id) ] [ text str ]

                Nothing ->
                    text ""
            ]

        Presentation ->
            []


titleId : String -> String
titleId id =
    id ++ "-label"


descId : String -> String
descId id =
    id ++ "-desc"


defaultConfig : Config
defaultConfig =
    Config
        { inheritSize = False
        , role = Presentation
        }


presentation : Config
presentation =
    defaultConfig


{-| Meaningful image. Title should be read aloud to users who can't see it.
-}
img : String -> Config
img title =
    let
        (Config defaults) =
            defaultConfig
    in
        Config { defaults | role = Img (ImgAlt title Nothing) }


{-| Meaningful image with title and description. Title and description should be
read aloud to users who can't see it.
-}
imgWithDesc : String -> String -> Config -> Config
imgWithDesc title desc (Config config) =
    let
        (Config defaults) =
            defaultConfig
    in
        Config { defaults | role = Img (ImgAlt title (Just desc)) }


inheritSize : Config -> Config
inheritSize (Config config) =
    Config { config | inheritSize = True }


type Config
    = Config
        { inheritSize : Bool
        , role : Role
        }


type Role
    = Img ImgAlt
    | Presentation


type alias ImgAlt =
    { title : String
    , desc : Maybe String
    }


main : Html Never
main =
    view presentation
        (svgAsset "cultureamp-style-guide/icons/informational/exclamation.svg")
        "elm-icon-demo"
