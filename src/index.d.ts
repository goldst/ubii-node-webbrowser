
import EventEmitter from 'events';
import ProtobufLibrary from '@tum-far/ubii-msg-formats/dist/js/protobuf';

export declare class UbiiClientService extends EventEmitter {
    constructor(enforcer: Symbol);
    static get instance(): UbiiClientService;
    setName(name: string): void;
    setHTTPS(bool: boolean): void;
    connect(urlServices: string, urlTopicData: any): Promise<void>;
    disconnect(): Promise<void | Promise<void>>;
    reconnect(): Promise<void>;
    waitForConnection(): Promise<string>;
    isConnected(): boolean;
    onDisconnect(callback: Function): void;
    getClientID(): string | undefined;
    callService(serviceRequest: Object): Promise<void>;
    registerDevice(specs: Partial<ProtobufLibrary.ubii.devices.Device>): Promise<ProtobufLibrary.ubii.devices.Device>;
    registerSession(sessionSpecs: Partial<ProtobufLibrary.ubii.sessions.Session>): Promise<ProtobufLibrary.ubii.sessions.Session>;
    getPublishIntervalMs(): number;
    setPublishIntervalMs(intervalMs: number): void;
    publishRecord(topicDataRecord: Partial<ProtobufLibrary.ubii.topicData.TopicDataRecord>): void;
    publishRecordList(topicDataRecord: Partial<ProtobufLibrary.ubii.topicData.TopicDataRecordList>): void;
    publishRecordImmediately(topicDataRecord: Partial<ProtobufLibrary.ubii.topicData.TopicDataRecord> & { topic: string }): void;
    subscribeTopic(topic: any, callback: Function): Promise<false | void>;
    unsubscribeTopic(topic: any, callback?: Function): Promise<void>;
    subscribeRegex(regex: string, callback: Function): Promise<boolean>;
    unsubscribeRegex(regex: string, callback: Function): void;;
    getUUIDv4Regex(): string;
    generateTimestamp(): { seconds: number, nanos: number };

    static EVENTS: {
        CONNECT: string;
        DISCONNECT: string;
        RECONNECT: string;
    }
}