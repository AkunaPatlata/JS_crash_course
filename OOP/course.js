class CssClass {
    constructor(name, properties = []) {
        this.name = name;
        this.properties = properties;
    }

    addProperty(property) {
        this.properties.push(property);
    }

    removeProperty(property) {
        this.properties = this.properties.filter(
        function (p) {
            return p !== property;
        });
    }

getCSS() {
    return (this.properties.length === 0) ? '' :
    `.${this.name} {\n${this.properties.join(';\n')};\n}`;
}
}
  
const instance = new CssClass('my-class', ['color: #fff', 'background-color: #000']);
console.log(instance.getCSS());
instance.addProperty('font-size: 12px');
console.log(instance.getCSS());
instance.removeProperty('color: #fff');
console.log(instance.getCSS());
  
class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn () {
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px; margin: 20px; border-radius: 5px;">${this.text}</button>`);
    }
}
  
const btn1 = new Button(100, 50, 'Click me');
btn1.showBtn();
  
class BootstapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }

    showBtn() {
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px; background-color: ${this.color}; margin: 20px; border-radius: 5px;">${this.text}</button>`);
    }
}
  
const btn2 = new BootstapButton(100, 50, 'Click me', 'red');
btn2.showBtn();


class ExtendedDate extends Date {
    constructor(dateString) {
      super(dateString);
    }
    
    getDayInText() {
        const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
        return days[this.getDay()];
    }
    
    getMonthInText() {
        const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
        return months[this.getMonth()];
    }

    isFuture() {
        const now = new Date();
        return this.getTime() >= now.getTime();
    }

    isLeap() {
        return this.getFullYear() % 4 == 0;
    }

    getnextDay() {
        this.setDate(this.getDate() + 1);
        return `${this.getDate()}.${this.getMonth()}.${this.getFullYear()}`;
    }
    
    getExtendedDate() {
      const dayInText = this.getDayInText();
      const monthInText = this.getMonthInText();
      const dateInText = `${this.getDate()} ${monthInText}`;
      const is_future = this.isFuture();
      const is_leap = this.isLeap();
      const nextDay = this.getnextDay();
      document.write(`
      <p>${dayInText}, ${dateInText}, ${this.getFullYear()}</p>
      <p>Is it future? ${is_future}</p>
      <p>Is it leap? ${is_leap}</p>
      <p>And finally the next date is ${nextDay}</p>`);
    }
  }


const date = new ExtendedDate("2023-04-20");
date.getExtendedDate();


