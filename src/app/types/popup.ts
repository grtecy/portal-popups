export class ItemRequest {
    constructor(
        public name: string,
        public description: string,
        public requestDate: string,
        public contactsReviews: string[],
        public filesUploaded?: string[],
        public imagesUploaded?: string[]
    ) { }
}

export class GraphicRequest {
    constructor(
        public name: string,
        public type: string,
        public description: string,
        public size: number,
        public isQuote: boolean,
        public quantities: number,
        public requestDate: string,
        public contactsReviews: string[],
        public filesUploaded?: string[],
        public imagesUploaded?: string[]
    ) { }
}

export class PhotoRequest {
    constructor(
        public name: string,
        public shootType: string,
        public description: string,
        public contactSchedules: string[],
        public filesUploaded?: string[],
        public imagesUploaded?: string[]
    ) { }
}

export class WebsiteRequest {
    constructor(
        public name: string,
        public type: string,
        public description: string,
        public urlReference: string,
        public filesUploaded?: string[],
        public imagesUploaded?: string[]
    ) { }
}

export class PaidRequest {
    constructor(
        public name: string,
        public type: string,
        public description: string,
        public budget: number,
        public isMonthly: string,
        public filesUploaded?: string[],
        public imagesUploaded?: string[]
    ) { }
}

export class SocialRequest {
    constructor(
        public name: string,
        public type: string,
        public description: string,
        public idealDate: string,
        public quoteTime: string,
        public filesUploaded?: string[],
        public imagesUploaded?: string[]
    ) { }
}

export class SupportRequest {
    constructor(
        public name: string,
        public type: string,
        public description: string,
        public whoProvides: string[],
        public urgency: string,
        public filesUploaded?: string[],
        public imagesUploaded?: string[]
    ) { }
}

export class UrgentRequest {
    constructor(
        public type: string,
        public description: string,
        public urlPages: string[],
        public deviceIssue: string,
        public browserIssue: string,
        public filesUploaded?: string[],
        public imagesUploaded?: string[]
    ) { }
}

export class InviteRequest {
    constructor(
        public firstName: string,
        public lastName: string,
        public phone: string,
        public email: string,
        public manageRequests: boolean,
        public manageSocial: boolean,
        public manageReviews: boolean,
        public manageBusiness: boolean,
        public makeAdmin: boolean
    ) { }
}

export class DenyRequest {
    constructor(
        public type: string,
        public reason: string,
    ) { }
}
