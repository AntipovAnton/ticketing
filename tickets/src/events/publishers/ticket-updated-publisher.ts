import { Publisher, Subjects, TicketUpdatedEvent } from '@r2d2-code/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
