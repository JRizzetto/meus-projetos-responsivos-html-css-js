class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide=${id}]`);
        this.active = 0;
        console.log(this.slide)
        this.activeSlide(1);
    }
    activeSlide(index) {
        this.active = index;
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.items[index].classList.add('active');
        console.log(this.items);
    }

    prev() {

    }

    next() {
        this.activeSlide(this.active + 1);
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('slide-next');
        nextBtn.addEventListener("click", this.next)
    }

    init() {
        this.addNavigation();
    }
}

new SlideStories('slide');