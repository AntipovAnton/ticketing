import { Publisher, OrderCreatedEvent, Subjects } from '@r2d2-code/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
