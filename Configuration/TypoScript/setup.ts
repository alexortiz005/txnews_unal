plugin.tx_news {
	view {
		templateRootPaths {
			0 = EXT:news/Resources/Private/Templates/
			1 = EXT:news_unal/Resources/Private/Templates
			2 = {$plugin.tx_news_unal.view.templateRootPath}
		}

		partialRootPaths {
			0 = EXT:news/Resources/Private/Partials/
			1 = EXT:news_unal/Resources/Private/Partials/
			2 = {$plugin.tx_news_unal.view.partialRootPath}
		}

		layoutRootPaths {
			0 = EXT:news/Resources/Private/Layouts/
			1 = EXT:news_unal/Resources/Private/Layouts/
			2 = {$plugin.tx_news_unal.view.layoutRootPath}
		}

		
		widget.GeorgRinger\News\ViewHelpers\Widget\PaginateViewHelper.templateRootPath = EXT:news_unal/Resources/Private/Templates/
	}
	
}

page{
    includeCSS {
        news-unal-style = EXT:news_unal/Resources/Public/Css/news-unal-style.scss
    }

    includeJS{
        news_unal = EXT:news_unal/Resources/Public/Js/news_unal.js  
       
    }

}