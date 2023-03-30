import {useEffect} from "react";

export  const CustomScroll = () => {
    var d, s2, vPos;
    useEffect(() => {
        d = document.getElementById('custom-container');
        document.body.style.height = "100vh";
        d.style.overflow = "hidden";
        d.style.position = "relative";
        d.style.height = "100vh";
        d.style.width = "100vw";
        s2 = document.getElementById('photo-mobile-slider');
        vPos = d.scrollTop;
        pointerManager(wheelHandler);
        document.addEventListener('wheel', wheelHandler);
    })

    const wheelHandler = ({deltaY}) => {
        //const min = 0;
        const stop1 = s2.offsetTop;
        const stop2 = stop1 + s2.scrollWidth - s2.clientWidth;
        const max = d.scrollHeight - d.clientHeight + stop2 - stop1;

        vPos = Math.max(0, Math.min(max, vPos + deltaY));

        if (vPos < stop1) {
            d.scrollTop = vPos;
            s2.scrollLeft = 0;
        } else if (vPos < stop2) {
            d.scrollTop = stop1;
            s2.scrollLeft = vPos - stop1;
        } else {
            d.scrollTop = vPos - stop2 + stop1;
            s2.scrollLeft = stop2 - stop1;
        }
        //let slide_width = document.querySelector('.photo-mobile .slide1').offsetWidth;

        if(s2.scrollLeft > 0){
            document.querySelector('.photo-mobile .slide1 .arrow').classList.add('animate-arrow');
        }
        let slide4 =  document.querySelector('#photo-mobile-slider .slide6');
        if(s2.scrollLeft > slide4.offsetLeft){
            document.querySelector('.photo-mobile .slide4 .arrow').classList.add('animate-arrow');
        }
        let slide6 =  document.querySelector('#photo-mobile-slider .slide6');
        if(s2.scrollLeft > slide6.offsetLeft){
            document.querySelector('.photo-mobile .slide6 .arrow').classList.add('animate-arrow');
        }
        if(s2.scrollLeft > 400){
            document.querySelector('#photo-mobile-slider .slide-wrapper .slide2 .promt').style.right = '16px';
        }
        else{
            document.querySelector('#photo-mobile-slider .slide-wrapper .slide2 .promt').style.right = '-60px';
        }
        let slide5_mobile =  document.querySelector('#photo-mobile-slider .slide-wrapper .slide5');
        let slide5_width_mobile = slide5_mobile.offsetWidth;
        if(s2.scrollLeft >  slide5_mobile.offsetLeft + (slide5_width_mobile / 3)){
            document.querySelector('#photo-mobile-slider .slide-wrapper .slide5 .promt').style.left = slide5_width_mobile / 2 + 'px';
        }
        else{
            document.querySelector('#photo-mobile-slider .slide-wrapper .slide5 .promt').style.left = slide5_width_mobile / 2 - 100 + 'px';
        }

        if (d.scrollTop > 600){
            document.getElementById('for-buyers').style.top = '-100px';
            document.querySelector('.center').style.bottom = '0px';
        } else {
            document.getElementById('for-buyers').style.top = '0px';
            document.querySelector('.center').style.bottom = '-100px';
        }

        if (d.scrollTop > 1000){
            document.getElementById('for-agents').style.top = '350px';
            document.querySelector('.center .bottom').style.bottom = '0px';
            document.getElementById('circle-bg').style.opacity = 1;
        } else {
            document.getElementById('for-agents').style.top = '500px';
            document.querySelector('.center .bottom').style.bottom = '-100px';
            document.getElementById('circle-bg').style.opacity = 0;
        }
        if (d.scrollTop > 2000){
            document.querySelector('.top .item .arrow').classList.add('animate-arrow');
            document.querySelector('.top .img-1').style.top = 0;
        }else{
            document.querySelector('.top .img-1').style.top = '-100px';
        }
        if (d.scrollTop > 2600) {
            document.querySelector('.center .item .arrow').classList.add('animate-arrow');
        }
        if (d.scrollTop > 3700){
            document.querySelector('.center .img-4').style.bottom = '0';
            document.querySelector('.center .prompt').style.bottom = '400px';
            document.querySelector('.bottom .item .arrow').classList.add('animate-arrow');
        }else{
            document.querySelector('.center .img-4').style.bottom = '100px';
            document.querySelector('.center .prompt').style.bottom = '600px';
        }
        let slide5 =  document.querySelector('.photo .bottom .wrapper');
        let slide5_width = slide5.offsetWidth;
        if (d.scrollTop > slide5.offsetTop - slide5_width){
            document.querySelector('.bottom .prompt').style.top = '70px';
            document.querySelector('.bottom .img-5').style.bottom = '0';
            document.querySelector('.bottom .img-5').style.opacity = 1;
        }else{
            document.querySelector('.bottom .prompt').style.top = '170px';
            document.querySelector('.bottom .img-5').style.bottom = '-300px';
            document.querySelector('.bottom .img-5').style.opacity = 0;
        }

    }

    /*
    function getBottom(el) {
        const {offsetTop, offsetHeight} = el;
        return offsetTop + offsetHeight;
    }
    */

    // ************* Custom scroll on mobile ************ //
    const frictionK = 2000;

    function pointerManager(onScroll) {
        const pointers = [];
     /*  let lastTime = Date.now();
        let dx = 0;
        let dy = 0;
        let dt = 0;

        let isScrolling = false;

      */
        let destroyed = false;
        let inertia = null;


        function pointerDownHandler(event) {
            const {pointerType, pointerId} = event;
            //console.log('down', pointerId, pointerType);
            if (pointerType !== 'touch') {
                return;
            }
            if (inertia != null) {
                inertia.stop();
            }

            let pointer = findPointer(pointerId);

            if (pointer == null) {
                pointer = {id: pointerId, down: event, move: MoveEventsArray(), speed: 0};
                pointers.push(pointer);
            } else {
                console.error(`Pointer ${pointerId} already exists!`);
            }
        }

        function pointerUpHandler(event) {
            const {pointerId} = event;
            //console.log('up', pointerId);
            const pointer = findPointer(pointerId);
            if (pointer != null) {
                const speedY = pointer.move.speedY();
                //console.log('*** start ***', speedY);

                inertia = startInertia(speedY, speedY > 0 ? -frictionK : frictionK,
                    (dy) => {
                        onScroll({deltaY: -dy})
                    },
                    () => {
                        inertia = null;
                        console.log('*** done ***');
                    }
                )

            }
            removePointer(event.pointerId);
        }

        function pointerCancelHandler(event) {
            //console.log('cancel', event.pointerId);
            removePointer(event.pointerId);
        }

        function removePointer(id) {
            const index = findPointerIndex(id);
            if (index >= 0) {
                pointers.splice(index, 1);
            }
        }

        function pointerMoveHandler(event) {
            const {pointerType, pointerId} = event;
            //console.log('move', pointerId);
            if (pointerType !== 'touch' || pointers.length !== 1) {
                return;
            }

            const index = findPointerIndex(pointerId);
            if (index < 0) {
                console.error(`Something went wrong, could not find pointer ${pointerId}`);
            } else {
                const pointer = pointers[index];
                pointer.move.push(event);
                onScroll({deltaY: -pointer.move.last().dy});
            }
        }

        function findPointerIndex(id) {
            return pointers.findIndex((p) => p.id === id);
        }

        function findPointer(id) {
            const index = findPointerIndex(id);
            return pointers[index];
        }

        const events = {
            pointerdown: pointerDownHandler,
            pointerup: pointerUpHandler,
            pointercancel: pointerCancelHandler,
            pointermove: pointerMoveHandler,
        }

        function docTouchMoveHandler(event) {
            console.log('*** touchmove ****');
            event.preventDefault();
        }

        function init() {
            Object.entries(events).forEach(([key, handler]) => {
                document.body.addEventListener(key, handler);
            });
            document.addEventListener('touchmove', docTouchMoveHandler, {passive: false});
        }

        function destroy() {
            assertNotDestroyed();
            destroyed = true;

            Object.entries(events).forEach(([key, handler]) => {
                document.body.removeEventListener(key, handler);
            });
            document.removeEventListener('touchmove', docTouchMoveHandler, {passive: false});
        }

        function assertNotDestroyed() {
            if (destroyed) {
                throw new Error('This pointer manager has already been destroyed');
            }
        }

        init();

        return {
            destroy,
        }
    }

    function MoveEventsArray(limit = 5) {
        const events = [];
        //let sumDX = 0;
        let sumDY = 0;
        let sumDT = 0;

        return {
            push(event) {
                const time = Date.now();
                const last = this.last();
                let dx = 0;
                let dy = 0;
                let dt = 0;
                if (last) {
                    dx = event.clientX - last.event.clientX;
                    dy = event.clientY - last.event.clientY;
                    dt = Date.now() - last.time;
                    //sumDX += dx;
                    sumDY += dy;
                    sumDT += dt;
                }
                events.push({time, event, dx, dy, dt});
                if (events.length > limit) {
                    events.shift();
                    const first = this.first();
                    //sumDX -= first.dx;
                    sumDY -= first.dy;
                    sumDT -= first.dt;
                }
            },
            first() {
                return events[0];
            },
            last() {
                return events[events.length - 1];
            },
            sum() {
                return {sumDT, sumDY, speedY: this.speedY()};
            },
            speedY() {
                return sumDT === 0 ? 0 : sumDY / sumDT * 1000;
            },
            clear() {
                events.length = 0;
                //sumDX = 0;
                sumDY = 0;
                sumDT = 0;
            }
        }
    }

    function startInertia(speed, friction, fn, done) {
        if (
            isNaN(speed) || isNaN(friction) || Math.abs(friction) < 1
            || ((speed < 0) !== (friction > 0))
        ) {
            return;
        }

        setTimeout(() => {
            console.log('*** stop ***');
            stop = true;
        }, 2000);

        const v0 = speed;
        const a = friction;
        let t0 = Date.now();
        let lastY = 0;
        let stop = false;

        function frame() {
            const t1 = Date.now();
            const dt = (t1 - t0) / 1000;
            const v1 = v0 + a * dt;
            if (stop || ((v1 < 0) !== (speed < 0))) {
                done();
                return;
            }

            const y = v0 * dt + a * dt * dt / 2;
            const dy = y - lastY;

            lastY = y;
            console.log(lastY, v1, dy, dt);

            try {
                fn(dy);
            } catch (e) {
                console.error(e);
            }

            requestAnimationFrame(frame);
        }

        frame();

        return {
            stop() {
                stop = true;
            }
        }
    }
}