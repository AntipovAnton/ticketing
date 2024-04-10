import { Publisher, Subjects, TicketCreatedEvent } from '@r2d2-code/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
