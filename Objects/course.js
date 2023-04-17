// Task 1

let time_obj = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    display_time(){
        alert(`Now we have ${this.hours}:${this.minutes}:${this.seconds}`)
    },

    add_second(){
        this.seconds++
        if (this.seconds >= 60){
            this.seconds = 0
            this.minutes++
            if (this.minutes >= 60){
                this.minutes = 0
                this.hours++
                if (this.hours > 12){
                    this.hours = 0
                }
            }
        }
    },

    substract_second(){
        this.seconds--
        if (this.seconds < 0){
            this.seconds = 59
            this.minutes--
            if (this.minutes < 0){
                this.minutes = 59
                this.hours--
                if (this.hours < 0){
                    this.hours = 23
                }
            }
        }
    },

    display_current_time(){
        document.write(`Current time is ${new Date(Date.now()).toLocaleTimeString()}`)
    }
}

time_obj.display_time()
alert('Lets add 100 seconds')
for(let i = 0; i < 100; ++i){
    time_obj.add_second()
}
time_obj.display_time()
alert('Now lets get back 41 second')
for(let i = 0; i < 41; ++i){
    time_obj.substract_second()
}
time_obj.display_time()

time_obj.display_current_time()

// Task 2

let cars = {
    manufacturer: 'Tesla',
    model: 'Tesla Model Y',
    year_of_manufacturer: 2020,
    max_speed: 217,

    display_info(){
        alert(`Our car is ${this.model}, Its manufacturer is ${this.manufacturer}, it was designed in ${this.year_of_manufacturer}, its maximum speed is ${this.max_speed} km/h`)
    },

    magical_method(distance){
        let hours = distance / this.max_speed
        let total_hours = hours + Math.floor(hours / 4)
        let h = Math.floor(total_hours)
        let m = Math.floor((total_hours - h) * 60)
        alert(`So your car will need ${h} hours and ${m} minutes to cover ${distance}km`)
    }

}
cars.display_info()

let distance = +prompt(`Now enter what distance do you want our car to go`)

cars.magical_method(distance)