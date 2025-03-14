import Session from '../aggregates/Session';
import IpAddress from '../value-objects/IpAddress';
import SessionId from '../value-objects/SessionId';
import TitleId from '../value-objects/TitleId';
import Xuid from '../value-objects/Xuid';

export default interface ISessionRepository {
  findAdvertisedSessions: (titleId: TitleId, resultsCount: number) => Promise<Session[]>;
  findSession: (titleId: TitleId, id: SessionId) => Promise<Session | undefined>;
  findSessionsByIP: (hostAddress: IpAddress) => Promise<Session[]>;
  findByPlayer: (xuid: Xuid) => Promise<Session>;
  deleteSessions: (sessions: Session[]) => Promise<void>;
  save: (session: Session) => Promise<void>;
}

export const ISessionRepositorySymbol = Symbol('ISessionRepository');
