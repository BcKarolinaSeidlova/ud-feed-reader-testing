/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* Test suite "RSS Feeds" */
    describe('RSS Feeds', function() {
    	/*Testing if allFeeds variable has been defined
    	* and is not empty*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Testing if each feed has defined URL that is not empty*/
         it('have defined URL that is not empty',function() {
         	allFeeds.forEach(function(af) {
         		expect(af.url).toBeDefined();
         		expect(af.url).not.toBe('');
         	});

         });

         /* Testing if each feed has defined name that is not empty*/
         it('have defined name',function() {
         	allFeeds.forEach(function(af) {
         		expect(af.name).toBeDefined();
         		expect(af.name).not.toBe('');
         	});

         });
    });


    /* Test suite "The menu" */
    describe('The menu', function() {
    	var body = $('body');

    	/* Testing if the menu element is hidden by default. */
    	it('is hidden by default', function() {
    		expect(body.hasClass('menu-hidden')).toBe(true);

    	});

      	/* Testing if the menu changes visibility 
      	* when the menu icon is clicked.*/
        it('changes visibility when the menu icon is clicked', function() {
        	var menuIcon = $('.menu-icon-link');
        	menuIcon.trigger('click');
        	expect(body.hasClass('menu-hidden')).not.toBe(true);
        	menuIcon.trigger('click');
        	expect(body.hasClass('menu-hidden')).toBe(true);
        
    	});

	});


    /* Test suite "Initial Entries" */
    describe('Initial Entries', function() {
    	/*ensuring loadFeed function is complete*/
    	beforeEach(function (done) {
    		loadFeed(0, done);
    	});

    	/*testing if entries have at least one entry*/
    	it('contain at least one entry', function() {
    		expect($('.feed .entry').length).toBeGreaterThan(0);

    	});

     });

 	 /* Test suite "New Feed Selection" */
 	 describe('New Feed Selection', function() {
 	 	var originalFeed,
 	 		newFeed;

 	 	/*getting two feed content to compare them*/
   		beforeEach(function (done) {
    		loadFeed(0, function() {
    			originalFeed = $('.feed')[0].innerHTML;
    			loadFeed(1, function () {
    				newFeed = $('.feed')[0].innerHTML;
    				done();

    			});
    		});
    	});

   		/*testing if the content has changed*/
   		it('has changed content', function() {
   			expect(originalFeed).not.toEqual(newFeed);

   		});

     });

});
