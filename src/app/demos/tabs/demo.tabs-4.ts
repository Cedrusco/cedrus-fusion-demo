import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { 
	ButtonModel, 
	ButtonStylingModel, 
	GalleryStylingModel, 
	RatingModel, 
	RatingStylingModel, 
	TabsModel, 
	TabsStylingModel, 
	TabsCardModel, 
	TabsCardStylingModel,
	CfRatingComponent
} from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-4',
	templateUrl: './demo.tabs-4.html',
 	styleUrls: ['./demo.tabs-4.scss']
})

export class CfDemoTabs4 implements AfterViewInit {
	@ViewChild('productTabs') productTabs;
	@ViewChildren(CfRatingComponent) ratings: QueryList<CfRatingComponent>;
	
	productsTabs = new TabsModel({ 
		headerPosition: 'right',
		showCardNumberAsIcon: false
	});
	products = [
		{
			card: new TabsCardModel({ label: '' }),
			data: {
				title: 'Armchair Art Prom Rio N-20 Black',
				shop: 'New Line',
				price: 85.00,
				rating: 4,
				description: 'Armchair Office Art Prom Rio N-20 on rollers, with adjustable height - the perfect solution for home and office premises.',
				images: [
					{
						small: 'https://www.nl.ua/upload/resize_cache/iblock/6e1/71_70_1/80344043.jpg',
						medium: 'https://www.nl.ua/upload/resize_cache/iblock/6e1/330_330_1/80344043.jpg',
						big: 'https://www.nl.ua/upload/iblock/6e1/80344043.jpg',
					},{
						small: 'https://www.nl.ua/upload/resize_cache/iblock/dba/71_70_1/80344043-1.jpg',
						medium: 'https://www.nl.ua/upload/resize_cache/iblock/dba/330_330_1/80344043-1.jpg',
						big: 'https://www.nl.ua/upload/iblock/dba/80344043-1.jpg',
					},{
						small: 'https://www.nl.ua/upload/resize_cache/iblock/30b/71_70_1/80344043-2.jpg',
						medium: 'https://www.nl.ua/upload/resize_cache/iblock/30b/330_330_1/80344043-2.jpg',
						big: 'https://www.nl.ua/upload/iblock/30b/80344043-2.jpg',
					},{
						small: 'https://www.nl.ua/upload/resize_cache/iblock/759/71_70_1/80344043-3.jpg',
						medium: 'https://www.nl.ua/upload/resize_cache/iblock/759/330_330_1/80344043-3.jpg',
						big: 'https://www.nl.ua/upload/iblock/759/80344043-3.jpg',
					}
				]
			}
		},
		{
			card: new TabsCardModel({ label: '' }),
			data: {
				title: 'Macbook Pro 15 Retina 1 TB',
				shop: 'Apple Family',
				price: 3195.00,
				rating: 5,
				description: 'The crisp, yet soft lines of the macbook case can not immediately blow the thought of how powerful, but the quiet device is in your hands. It will not only be an instrument but a partner and colleague for you, saving your time and your health.',
				images: [
					{
						small: 'https://apple-family.com.ua/image/cache/catalog/Mac/macbook%20pro/Apple%20MacBook%20Pro%2015%20Retina%20%28MJLQ2%29%202015-228x228.jpg',
						medium: 'https://apple-family.com.ua/image/cache/catalog/Mac/macbook%20pro/Apple%20MacBook%20Pro%2015%20Retina%20%28MJLQ2%29%202015-500x500.jpg',
						big: 'https://apple-family.com.ua/image/cache/catalog/Mac/macbook%20pro/Apple%20MacBook%20Pro%2015%20Retina%20%28MJLQ2%29%202015-500x500.jpg',						
					},
					{
						small: 'https://apple-family.com.ua/image/cache/catalog/Mac/macbook%20air/Apple%20MacBook%20Pro%2015%20Retina-74x74.jpg',
						medium: 'https://apple-family.com.ua/image/cache/catalog/Mac/macbook%20air/Apple%20MacBook%20Pro%2015%20Retina-500x500.jpg',
						big: 'https://apple-family.com.ua/image/cache/catalog/Mac/macbook%20air/Apple%20MacBook%20Pro%2015%20Retina-500x500.jpg',
					},
					{
						small: 'https://apple-family.com.ua/image/catalog/Mac/20141030145540_5efa3.jpg',
						medium: 'https://apple-family.com.ua/image/catalog/Mac/20141030145540_5efa3.jpg',
						big: 'https://apple-family.com.ua/image/catalog/Mac/20141030145540_5efa3.jpg',
					},
					{
						small: 'https://apple-family.com.ua/image/catalog/Mac/11.jpg',
						medium: 'https://apple-family.com.ua/image/catalog/Mac/11.jpg',
						big: 'https://apple-family.com.ua/image/catalog/Mac/11.jpg',
					}
				]
			}
		},
		{
			card: new TabsCardModel({ label: '' }),
			data: {
				title: 'Emporio Armani Sportivo AR5905',
				shop: 'Global Watch Empire',
				price: 105.99,
				rating: 5,
				description: 'The creation of the dial is a whole art, which can not do without artistic skill and the newest technologies. The case of the watch has an increased resistance to corrosion and maintains color fastness for many decades.',
				images: [
					{
						small: 'https://i.ebayimg.com/00/s/NDk3WDUwMA==/z/3tAAAOSw-29ZTSRC/$_14.JPG',
						medium: 'https://i.ebayimg.com/00/s/NDk3WDUwMA==/z/3tAAAOSw-29ZTSRC/$_58.JPG',
						big: 'https://i.ebayimg.com/00/s/NDk3WDUwMA==/z/3tAAAOSw-29ZTSRC/$_58.JPG',
					},
					{
						small: 'https://i.ebayimg.com/00/s/NDk3WDUwMA==/z/KsgAAOSwwzhZTSRA/$_14.JPG',
						medium: 'https://i.ebayimg.com/00/s/NDk3WDUwMA==/z/KsgAAOSwwzhZTSRA/$_58.JPG',
						big: 'https://i.ebayimg.com/00/s/NDk3WDUwMA==/z/KsgAAOSwwzhZTSRA/$_58.JPG',
					},
					{
						small: 'https://i.ebayimg.com/00/s/NDk3WDUwMA==/z/XO0AAOSwd~RZTSRB/$_14.JPG',
						medium: 'https://i.ebayimg.com/00/s/NDk3WDUwMA==/z/XO0AAOSwd~RZTSRB/$_58.JPG',
						big: 'https://i.ebayimg.com/00/s/NDk3WDUwMA==/z/XO0AAOSwd~RZTSRB/$_58.JPG',
					},
					{
						small: 'https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/qnkAAOSwbopZW7Uu/$_14.JPG',
						medium: 'https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/qnkAAOSwbopZW7Uu/$_58.JPG',
						big: 'https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/qnkAAOSwbopZW7Uu/$_58.JPG',
					},
					{
						small: 'https://i.ebayimg.com/00/s/OTAwWDkwMA==/z/vwIAAOSwFqNZW7Uw/$_14.JPG',
						medium: 'https://i.ebayimg.com/00/s/OTAwWDkwMA==/z/vwIAAOSwFqNZW7Uw/$_58.JPG',
						big: 'https://i.ebayimg.com/00/s/OTAwWDkwMA==/z/vwIAAOSwFqNZW7Uw/$_58.JPG',
					}
				]
			}
		}
	];

	tabsStyle = new TabsStylingModel({ container: {class: 'products-tabs'} });
	productStyle = new TabsCardStylingModel({ container: {class: 'product-page'} });

	formatPrice(price) { return '$' + price.toFixed(2); };

	productRatings = [
		new RatingModel({ label: '', icon: 'star' }),
		new RatingModel({ label: '', icon: 'star' }),
		new RatingModel({ label: '', icon: 'star' }),
	];
	ratingStyle = new RatingStylingModel({ 
		item: 'star-style', 
		iconSize: '22px', 
		filledColor: 'rgba(0, 150, 136, 1)',
		emptyColor: 'rgba(0, 150, 136, 0.2)',
	});

	galleryOptions = {
		height: '370px',
		imageSize: 'contain',
		imagePercent: 85,
		thumbnailsPercent: 15,
		thumbnailsColumns: 6,
		thumbnailsMargin: 20,
		fullWidth: false
	};
	galleryStyles = new GalleryStylingModel({container:{class:'custom-gallery'}});

	_rates = [];
	ngAfterViewInit() {
    this.ratings.forEach(r => {
    	this._rates.push(r);
    });

    setTimeout(() => {
    	for (var i = 0; i < this._rates.length; ++i) {    		
    		this._rates[i].properties.value = this.products[i].data.rating;
    	}
    }, 100);
  }
}
