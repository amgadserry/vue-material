<template>
  <div class="md-card-expand" ref="expand">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        observer: null
      };
    },
    methods: {
      setContentMargin() {
        this.content.style.marginTop = -this.content.offsetHeight + 'px';
      },
      toggle() {
        this.$refs.expand.classList.toggle('md-active');
      },
      onWindowResize() {
        window.requestAnimationFrame(this.setContentMargin);
      },
      onContentChanged() {
        window.requestAnimationFrame(this.setContentMargin);
      }
    },
    mounted() {
      window.setTimeout(() => {
        this.trigger = this.$el.querySelector('[md-expand-trigger]')[0];
        this.content = this.$el.querySelector('.md-card-content');

        if (this.content) {
          this.setContentMargin();

          this.trigger.addEventListener('click', this.toggle);
          window.addEventListener('resize', this.onWindowResize);
  
          this.observer = new MutationObserver(this.onContentChanged);
          this.observer.observe(this.content, {childList: true});
        }
      }, 200);
    },
    destroyed() {
      if (this.content) {
        this.trigger.removeEventListener('click', this.toggle);
        window.removeEventListener('resize', this.onWindowResize);
        this.observer.disconnect();
      }
    }
  };
</script>
