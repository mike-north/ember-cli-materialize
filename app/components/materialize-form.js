import Ember from 'ember';

export default Ember.Component.extend({
  inputs: [{input: "First Name", isText: true}, {input: "Last Name", isText: true}, {input: "Email", isText: true}, {input: "Phone Number", isText: true},
           {input: "Male", isRadio: true}, {input: "Female", isRadio: true}, {input: "Like Beer?", isSwitch: true, on: "Yes", off: "No"}, {input: "How Much?", isRange: true},
           {input: "IPAs", isCheckBox: true}, {input: "Blondes", isCheckBox: true}, {input: "Light Beers", isCheckBox: true}, {input: "Lagers", isCheckBox: true},
           {input: "When did you last have a tasty Beverage?", isDate: true, years: 1},
           {input: "Would you rather eat", isSelect: true, selections: [{value: 1, option: 'BBQ'}, {value: 2, option: 'Italian'}, {value: 3, option: 'Burgers'}]}],


  ids: [],
  tagName: 'div',
  didInsertElement: function(){
    this.$('.datepicker').pickadate({
      selectMonths: true,
      selectYears: this.getYears(),
    });
    this.$('select').material_select();
    this.getChildIds();
  },
  getYears: function(){
        var tempInp = this.get('inputs');
        for(var x = 0; x < tempInp.length; x++){
          if(tempInp[x].isDate){
            return tempInp[x].years;
          }
        }
      },

  getChildIds: function(){
    var Index = 0, temp = this.get('inputs');
    this.$('input').each(function(){
      if(typeof(Ember.$(this).parent().attr("class")) !== 'undefined'){
      if(Ember.$(this).parent().attr("class").indexOf("switch") === -1 && Ember.$(this).parent().attr("class").indexOf("range-field") === -1){
        temp[Index].id = Ember.$(this).attr('id');
        Ember.$("<label for=\"" + temp[Index].id + "\">" + temp[Index].input + "</label>").insertAfter(Ember.$(this));
      }
      }
      Index++;
    });
    this.set('inputs', temp);
  }
});
