import Ember from 'ember';

const {
	get
} = Ember;

export default function getAttr(attrs, attr){
	var ret = get(attrs, attr);
	if (typeof ret === 'object' && /MUTABLE_CELL/.test(Object.keys(ret).join())) {
		ret = get(ret, 'value');
	}
	return ret;
}