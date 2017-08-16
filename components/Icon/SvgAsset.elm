module Icon.SvgAsset exposing (SvgAsset, svgAsset)


svgAsset : String -> SvgAsset
svgAsset path =
    -- these placeholder values are replaced by Webpack at build time
    { id = "elm-svg-asset-placeholder"
    , viewBox = "0 0 0 0"
    }


type alias SvgAsset =
    { id : String
    , viewBox : String
    }
