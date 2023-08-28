// API KEY FOR GOOGLE
// AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU&callback=Function.prototype"></script>;

import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const customMap = new CustomMap('map');
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
