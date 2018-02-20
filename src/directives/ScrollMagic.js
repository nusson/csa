import { Controller, Scene } from 'scrollmagic';
import { TimelineMax } from 'gsap';

require('ScrollMagicPlugins/debug.addIndicators');
require('ScrollMagicPlugins/animation.gsap');

export default {
  bind(el, bindings, { context: _this }) {
    console.log('bind', el, bindings, _this);
    _this._sm_ = {
      controller: new Controller(),
      scene: null,
    };
  },
  inserted(el, bindings, { context: _this }) {
    const timeline = new TimelineMax()
      .set(el, { scale: 0.6 })
      .add('end', 30)
      .to(el, 10, { scale: 1 })
      .to(el, 20, { scale: 1.2 });
    const scene = new Scene({
      triggerElement: _this.$el,
      triggerHook: 1,
      duration: '300%',
    })
      // .on('enter', ({ progress }) => { console.log('enter', progress); })
      // .on('leave', ({ progress }) => { console.log('leave', progress); })
      // .on('start', ({ progress }) => { console.log('start', progress); })
      // .on('end', ({ progress }) => { console.log('end', progress); })
      // .on('progress', ({ progress }) => { console.log('progress', progress); })
      .addIndicators()
      .setTween(timeline)
      .addTo(_this._sm_.controller);
    new Scene({
      triggerElement: _this.$el,
      triggerHook: 0,
      duration: '130%',
    })
      .setPin(el, { pushFollowers: true })
      .addTo(_this._sm_.controller);

    _this._sm_.scene = scene;

    console.log('inserted', el, bindings, _this, scene);
  },
};
