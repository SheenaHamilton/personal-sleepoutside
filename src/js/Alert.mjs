import {renderListWithTemplate, getData, qs} from './utils.mjs';

export default class Alert{
    constructor(path = '../json/alerts.json') {
        this.alertdata = {};
        this.path = path;
    }

    async init() {
        this.alertdata = await getData(this.path);
        if (this.alertdata.Alerts.length > 0) {
            const alertSection = document.createElement('section');
            alertSection.classList.add('alert-list')
            const mainElement = qs('main');
            mainElement.prepend(alertSection);

            renderListWithTemplate(alertTemplate,'.alert-list',this.alertdata.Alerts);
        }
    }
}

function alertTemplate(alert) {
    return `<p style=' background-color: ${alert.background}; color:${alert.color};' class='alert-detail'>${alert.message}</p>`;
}

