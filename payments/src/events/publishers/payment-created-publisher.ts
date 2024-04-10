import { Subjects, Publisher, PaymentCreatedEvent } from '@r2d2-code/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
