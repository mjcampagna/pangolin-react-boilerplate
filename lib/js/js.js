'use strict';

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const Utilities = function() {
  this.breakpoint = 992; // pixels
}
Utilities.prototype.isTouchDevice = function() {
  return 'ontouchstart' in document.documentElement;
}
Utilities.prototype.isUnderBreakpoint = function(breakpoint) {
  return window.innerWidth <= breakpoint;
}

const Pangolin = function() {
  Utilities.call(this);

  this.toggleColumnL = document.getElementById('columnL');
  this.toggleColumnR = document.getElementById('columnR');

  this.isScrolling();
  this.animateColumns(this.breakpoint);
  this.eventListeners();
}
Pangolin.prototype = Object.create( Utilities.prototype );
Pangolin.prototype.constructor = Pangolin;

Pangolin.prototype.isScrolling = function() {
  if ( window.scrollY > 0 ) {
    document.body.classList.add('is-scrolling');
  } else {
    document.body.classList.remove('is-scrolling');
  }
}

Pangolin.prototype.animateColumns = function() {
  if ( this.isUnderBreakpoint( this.breakpoint ) ) {
    document.body.classList.add('animate-columns');
  } else {
    document.body.classList.remove('animate-columns');
  }
}

Pangolin.prototype.blockScroll = function( target ) {
  if ( target.checked ) {
    document.body.classList.add('block-scroll');
  } else {
    document.body.classList.remove('block-scroll');
  }    
}

Pangolin.prototype.eventListeners = function() {
  let _this = this;

  window.addEventListener( 'resize', debounce( function() {
    _this.animateColumns( _this.breakpoint );
    if ( _this.toggleColumnL.checked ) { _this.toggleColumnL.checked = false; }
    if ( _this.toggleColumnR.checked ) { _this.toggleColumnR.checked = false; }
  }, 250 ));

  window.addEventListener('scroll', function(e) {
    _this.isScrolling();
  }, false);

  if ( _this.toggleColumnL ) {
    _this.toggleColumnL.addEventListener( 'change', function() {
      _this.blockScroll( _this.toggleColumnL );
    });
  }

  if ( _this.toggleColumnR ) {
    _this.toggleColumnR.addEventListener( 'change', function() {
      _this.blockScroll( _this.toggleColumnR );
    });
  }
}

const pangolin = new Pangolin();


const Navigation = function(menu) {
  Utilities.call(this);
  this.preventClickEvent = false;
  this.init();
}
Navigation.prototype = Object.create( Utilities.prototype );
Navigation.prototype.constructor = Navigation;

Navigation.prototype.init = function() {

  let menus = document.querySelectorAll('.menu').forEach( function( menu ) {
    if ( !menu.classList.contains('mouseable') ) {
      menu.classList.add('mouseable');
    }
    if ( this.isTouchDevice() ) {
      if ( menu.classList.contains('mouseable') ) {
        menu.classList.remove('mouseable');
      }
      menu.classList.add('touchable');

      menu.addEventListener('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.openMenu(event);
      }.bind(this), false );
      menu.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.openMenu(event);
      }.bind(this), false );
    } else {
      menu.querySelectorAll('li').forEach( function(li) {
        li.addEventListener('mouseenter', function(event) {
          this.positionSubmenu(li);
        }.bind(this), false );
      }.bind(this) );
    }
  }.bind(this) );

  if ( this.isTouchDevice() ) {
    document.addEventListener('touchstart', function(event) {
      if ( !this.preventClickEvent ) {
        this.preventClickEvent = true;
      }
      this.blurMenus();
    }.bind(this), false );
    document.addEventListener('click', function(event) {
      if ( !this.preventClickEvent ) {
        this.blurMenus();
      }
    }.bind(this), false );

    window.addEventListener('resize', debounce( function() {
      this.blurMenus();
    }.bind(this), 250 ));
  }

};

Navigation.prototype.blurMenus = function(event) {
  let blurredMenus = [].slice.call( document.querySelectorAll('.hover') )
      .filter( function( menuItem ) {
        if ( event ) {
          return !menuItem.contains(event.target);
        }
        return menuItem;
      })
      .forEach( function(menuItem) {
        menuItem.classList.remove('position-right');
        menuItem.classList.remove('hover');
      });
  return false;
};

Navigation.prototype.openMenu = function(event) {
  let li = event.target.parentNode;
  let hasChildMenu = !!li.querySelector('ul');
  if ( !this.isUnderBreakpoint() && hasChildMenu ) {
    if ( li.classList.contains('hover') ) {
      return true;
    }
    li.classList.add('hover');
    this.positionSubmenu(li);
    this.blurMenus(event);
  }
};

Navigation.prototype.positionSubmenu = function( menuItem ) {
  let leftPos = menuItem.getBoundingClientRect().left;
  let submenu = menuItem.querySelector('ul');
  if ( submenu && window.innerWidth - ( leftPos + menuItem.offsetWidth ) < submenu.offsetWidth ) {
    submenu.classList.add('position-right');
  }
};

const pangolinMenus = new Navigation();
