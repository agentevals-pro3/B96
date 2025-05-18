import { RequestContext } from '../../api/common/request-context';
import { Order } from '../../entity/order/order.entity';
import { Refund } from '../../entity/refund/refund.entity';
import { VendureEvent } from '../vendure-event';

/**
 * @description
 * This event is fired whenever a {@link Refund} is created.
 *
 * @docsCategory events
 * @docsPage Event Types
 */
export class RefundEvent extends VendureEvent {
    constructor(
        public ctx: RequestContext,
        public order: Order,
        public refund: Refund,
    ) {
        super();
    }
}
