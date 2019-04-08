angular.
  module('couponList').
  component('couponList', {  // This name is what AngularJS uses to match to the `<coupon-list>` element.
    template:
        '<ul>' +
          '<li ng-repeat="coupon in $ctrl.coupons">' +
            '<span>{{coupon.number}}</span>' +
            '<p>{{coupon.balance}}</p>' +
          '</li>' +
        '</ul>',
    controller: function CouponListController() {
      this.coupons = [
    	  {
    	      number: '1234',
    	      balance: '38.5 €'
    	    }, 
    	    {
    	    	 number: '5678',
    	         balance: '11 €'
    	    }
      ];
    }
  });






