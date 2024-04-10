import { Subjects, Publisher, OrderCancelledEvent } from '@r2d2-code/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
