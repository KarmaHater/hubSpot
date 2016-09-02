import _ from 'lodash';

export default class Media  {
     static filter(medias, filter) {
        const items = medias.map((m) => m[filter]);
        return _.uniq(_.flatten(items)).sort();
    }
}
