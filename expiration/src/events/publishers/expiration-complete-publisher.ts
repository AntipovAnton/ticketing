import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@r2d2-code/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
