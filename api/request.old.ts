import got from 'got';

export class JsonRequest {
private options: any = {
    responseType: 'json'
}

    url(url: string) {
        this.options.url = url
        return this
    }

    async send() {
        return got<any>(this.options)
    }
}