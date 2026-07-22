
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ApiRequestLog
 * 
 */
export type ApiRequestLog = $Result.DefaultSelection<Prisma.$ApiRequestLogPayload>
/**
 * Model TranscriptionLog
 * 
 */
export type TranscriptionLog = $Result.DefaultSelection<Prisma.$TranscriptionLogPayload>
/**
 * Model AnalysisHint
 * 
 */
export type AnalysisHint = $Result.DefaultSelection<Prisma.$AnalysisHintPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ApiRequestLogs
 * const apiRequestLogs = await prisma.apiRequestLog.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ApiRequestLogs
   * const apiRequestLogs = await prisma.apiRequestLog.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.apiRequestLog`: Exposes CRUD operations for the **ApiRequestLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiRequestLogs
    * const apiRequestLogs = await prisma.apiRequestLog.findMany()
    * ```
    */
  get apiRequestLog(): Prisma.ApiRequestLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transcriptionLog`: Exposes CRUD operations for the **TranscriptionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TranscriptionLogs
    * const transcriptionLogs = await prisma.transcriptionLog.findMany()
    * ```
    */
  get transcriptionLog(): Prisma.TranscriptionLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisHint`: Exposes CRUD operations for the **AnalysisHint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisHints
    * const analysisHints = await prisma.analysisHint.findMany()
    * ```
    */
  get analysisHint(): Prisma.AnalysisHintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ApiRequestLog: 'ApiRequestLog',
    TranscriptionLog: 'TranscriptionLog',
    AnalysisHint: 'AnalysisHint',
    Feedback: 'Feedback'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "apiRequestLog" | "transcriptionLog" | "analysisHint" | "feedback"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ApiRequestLog: {
        payload: Prisma.$ApiRequestLogPayload<ExtArgs>
        fields: Prisma.ApiRequestLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiRequestLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiRequestLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          findFirst: {
            args: Prisma.ApiRequestLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiRequestLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          findMany: {
            args: Prisma.ApiRequestLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>[]
          }
          create: {
            args: Prisma.ApiRequestLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          createMany: {
            args: Prisma.ApiRequestLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiRequestLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>[]
          }
          delete: {
            args: Prisma.ApiRequestLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          update: {
            args: Prisma.ApiRequestLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          deleteMany: {
            args: Prisma.ApiRequestLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiRequestLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiRequestLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>[]
          }
          upsert: {
            args: Prisma.ApiRequestLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          aggregate: {
            args: Prisma.ApiRequestLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiRequestLog>
          }
          groupBy: {
            args: Prisma.ApiRequestLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiRequestLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiRequestLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApiRequestLogCountAggregateOutputType> | number
          }
        }
      }
      TranscriptionLog: {
        payload: Prisma.$TranscriptionLogPayload<ExtArgs>
        fields: Prisma.TranscriptionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranscriptionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranscriptionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload>
          }
          findFirst: {
            args: Prisma.TranscriptionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranscriptionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload>
          }
          findMany: {
            args: Prisma.TranscriptionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload>[]
          }
          create: {
            args: Prisma.TranscriptionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload>
          }
          createMany: {
            args: Prisma.TranscriptionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranscriptionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload>[]
          }
          delete: {
            args: Prisma.TranscriptionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload>
          }
          update: {
            args: Prisma.TranscriptionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload>
          }
          deleteMany: {
            args: Prisma.TranscriptionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranscriptionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranscriptionLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload>[]
          }
          upsert: {
            args: Prisma.TranscriptionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionLogPayload>
          }
          aggregate: {
            args: Prisma.TranscriptionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranscriptionLog>
          }
          groupBy: {
            args: Prisma.TranscriptionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranscriptionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranscriptionLogCountArgs<ExtArgs>
            result: $Utils.Optional<TranscriptionLogCountAggregateOutputType> | number
          }
        }
      }
      AnalysisHint: {
        payload: Prisma.$AnalysisHintPayload<ExtArgs>
        fields: Prisma.AnalysisHintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisHintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisHintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload>
          }
          findFirst: {
            args: Prisma.AnalysisHintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisHintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload>
          }
          findMany: {
            args: Prisma.AnalysisHintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload>[]
          }
          create: {
            args: Prisma.AnalysisHintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload>
          }
          createMany: {
            args: Prisma.AnalysisHintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisHintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload>[]
          }
          delete: {
            args: Prisma.AnalysisHintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload>
          }
          update: {
            args: Prisma.AnalysisHintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisHintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisHintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisHintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisHintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHintPayload>
          }
          aggregate: {
            args: Prisma.AnalysisHintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisHint>
          }
          groupBy: {
            args: Prisma.AnalysisHintGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisHintGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisHintCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisHintCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    apiRequestLog?: ApiRequestLogOmit
    transcriptionLog?: TranscriptionLogOmit
    analysisHint?: AnalysisHintOmit
    feedback?: FeedbackOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ApiRequestLog
   */

  export type AggregateApiRequestLog = {
    _count: ApiRequestLogCountAggregateOutputType | null
    _avg: ApiRequestLogAvgAggregateOutputType | null
    _sum: ApiRequestLogSumAggregateOutputType | null
    _min: ApiRequestLogMinAggregateOutputType | null
    _max: ApiRequestLogMaxAggregateOutputType | null
  }

  export type ApiRequestLogAvgAggregateOutputType = {
    statusCode: number | null
    durationMs: number | null
  }

  export type ApiRequestLogSumAggregateOutputType = {
    statusCode: number | null
    durationMs: number | null
  }

  export type ApiRequestLogMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    method: string | null
    path: string | null
    statusCode: number | null
    durationMs: number | null
    ipHash: string | null
    userAgent: string | null
    isError: boolean | null
    createdAt: Date | null
  }

  export type ApiRequestLogMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    method: string | null
    path: string | null
    statusCode: number | null
    durationMs: number | null
    ipHash: string | null
    userAgent: string | null
    isError: boolean | null
    createdAt: Date | null
  }

  export type ApiRequestLogCountAggregateOutputType = {
    id: number
    requestId: number
    method: number
    path: number
    statusCode: number
    durationMs: number
    ipHash: number
    userAgent: number
    isError: number
    createdAt: number
    _all: number
  }


  export type ApiRequestLogAvgAggregateInputType = {
    statusCode?: true
    durationMs?: true
  }

  export type ApiRequestLogSumAggregateInputType = {
    statusCode?: true
    durationMs?: true
  }

  export type ApiRequestLogMinAggregateInputType = {
    id?: true
    requestId?: true
    method?: true
    path?: true
    statusCode?: true
    durationMs?: true
    ipHash?: true
    userAgent?: true
    isError?: true
    createdAt?: true
  }

  export type ApiRequestLogMaxAggregateInputType = {
    id?: true
    requestId?: true
    method?: true
    path?: true
    statusCode?: true
    durationMs?: true
    ipHash?: true
    userAgent?: true
    isError?: true
    createdAt?: true
  }

  export type ApiRequestLogCountAggregateInputType = {
    id?: true
    requestId?: true
    method?: true
    path?: true
    statusCode?: true
    durationMs?: true
    ipHash?: true
    userAgent?: true
    isError?: true
    createdAt?: true
    _all?: true
  }

  export type ApiRequestLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiRequestLog to aggregate.
     */
    where?: ApiRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiRequestLogs to fetch.
     */
    orderBy?: ApiRequestLogOrderByWithRelationInput | ApiRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiRequestLogs
    **/
    _count?: true | ApiRequestLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiRequestLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiRequestLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiRequestLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiRequestLogMaxAggregateInputType
  }

  export type GetApiRequestLogAggregateType<T extends ApiRequestLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApiRequestLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiRequestLog[P]>
      : GetScalarType<T[P], AggregateApiRequestLog[P]>
  }




  export type ApiRequestLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiRequestLogWhereInput
    orderBy?: ApiRequestLogOrderByWithAggregationInput | ApiRequestLogOrderByWithAggregationInput[]
    by: ApiRequestLogScalarFieldEnum[] | ApiRequestLogScalarFieldEnum
    having?: ApiRequestLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiRequestLogCountAggregateInputType | true
    _avg?: ApiRequestLogAvgAggregateInputType
    _sum?: ApiRequestLogSumAggregateInputType
    _min?: ApiRequestLogMinAggregateInputType
    _max?: ApiRequestLogMaxAggregateInputType
  }

  export type ApiRequestLogGroupByOutputType = {
    id: string
    requestId: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ipHash: string | null
    userAgent: string | null
    isError: boolean
    createdAt: Date
    _count: ApiRequestLogCountAggregateOutputType | null
    _avg: ApiRequestLogAvgAggregateOutputType | null
    _sum: ApiRequestLogSumAggregateOutputType | null
    _min: ApiRequestLogMinAggregateOutputType | null
    _max: ApiRequestLogMaxAggregateOutputType | null
  }

  type GetApiRequestLogGroupByPayload<T extends ApiRequestLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiRequestLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiRequestLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiRequestLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApiRequestLogGroupByOutputType[P]>
        }
      >
    >


  export type ApiRequestLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    durationMs?: boolean
    ipHash?: boolean
    userAgent?: boolean
    isError?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiRequestLog"]>

  export type ApiRequestLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    durationMs?: boolean
    ipHash?: boolean
    userAgent?: boolean
    isError?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiRequestLog"]>

  export type ApiRequestLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    durationMs?: boolean
    ipHash?: boolean
    userAgent?: boolean
    isError?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiRequestLog"]>

  export type ApiRequestLogSelectScalar = {
    id?: boolean
    requestId?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    durationMs?: boolean
    ipHash?: boolean
    userAgent?: boolean
    isError?: boolean
    createdAt?: boolean
  }

  export type ApiRequestLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "method" | "path" | "statusCode" | "durationMs" | "ipHash" | "userAgent" | "isError" | "createdAt", ExtArgs["result"]["apiRequestLog"]>

  export type $ApiRequestLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiRequestLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      method: string
      path: string
      statusCode: number
      durationMs: number
      ipHash: string | null
      userAgent: string | null
      isError: boolean
      createdAt: Date
    }, ExtArgs["result"]["apiRequestLog"]>
    composites: {}
  }

  type ApiRequestLogGetPayload<S extends boolean | null | undefined | ApiRequestLogDefaultArgs> = $Result.GetResult<Prisma.$ApiRequestLogPayload, S>

  type ApiRequestLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiRequestLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiRequestLogCountAggregateInputType | true
    }

  export interface ApiRequestLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiRequestLog'], meta: { name: 'ApiRequestLog' } }
    /**
     * Find zero or one ApiRequestLog that matches the filter.
     * @param {ApiRequestLogFindUniqueArgs} args - Arguments to find a ApiRequestLog
     * @example
     * // Get one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiRequestLogFindUniqueArgs>(args: SelectSubset<T, ApiRequestLogFindUniqueArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiRequestLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiRequestLogFindUniqueOrThrowArgs} args - Arguments to find a ApiRequestLog
     * @example
     * // Get one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiRequestLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiRequestLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiRequestLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogFindFirstArgs} args - Arguments to find a ApiRequestLog
     * @example
     * // Get one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiRequestLogFindFirstArgs>(args?: SelectSubset<T, ApiRequestLogFindFirstArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiRequestLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogFindFirstOrThrowArgs} args - Arguments to find a ApiRequestLog
     * @example
     * // Get one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiRequestLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiRequestLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiRequestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiRequestLogs
     * const apiRequestLogs = await prisma.apiRequestLog.findMany()
     * 
     * // Get first 10 ApiRequestLogs
     * const apiRequestLogs = await prisma.apiRequestLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiRequestLogWithIdOnly = await prisma.apiRequestLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiRequestLogFindManyArgs>(args?: SelectSubset<T, ApiRequestLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiRequestLog.
     * @param {ApiRequestLogCreateArgs} args - Arguments to create a ApiRequestLog.
     * @example
     * // Create one ApiRequestLog
     * const ApiRequestLog = await prisma.apiRequestLog.create({
     *   data: {
     *     // ... data to create a ApiRequestLog
     *   }
     * })
     * 
     */
    create<T extends ApiRequestLogCreateArgs>(args: SelectSubset<T, ApiRequestLogCreateArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiRequestLogs.
     * @param {ApiRequestLogCreateManyArgs} args - Arguments to create many ApiRequestLogs.
     * @example
     * // Create many ApiRequestLogs
     * const apiRequestLog = await prisma.apiRequestLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiRequestLogCreateManyArgs>(args?: SelectSubset<T, ApiRequestLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiRequestLogs and returns the data saved in the database.
     * @param {ApiRequestLogCreateManyAndReturnArgs} args - Arguments to create many ApiRequestLogs.
     * @example
     * // Create many ApiRequestLogs
     * const apiRequestLog = await prisma.apiRequestLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiRequestLogs and only return the `id`
     * const apiRequestLogWithIdOnly = await prisma.apiRequestLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiRequestLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiRequestLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiRequestLog.
     * @param {ApiRequestLogDeleteArgs} args - Arguments to delete one ApiRequestLog.
     * @example
     * // Delete one ApiRequestLog
     * const ApiRequestLog = await prisma.apiRequestLog.delete({
     *   where: {
     *     // ... filter to delete one ApiRequestLog
     *   }
     * })
     * 
     */
    delete<T extends ApiRequestLogDeleteArgs>(args: SelectSubset<T, ApiRequestLogDeleteArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiRequestLog.
     * @param {ApiRequestLogUpdateArgs} args - Arguments to update one ApiRequestLog.
     * @example
     * // Update one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiRequestLogUpdateArgs>(args: SelectSubset<T, ApiRequestLogUpdateArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiRequestLogs.
     * @param {ApiRequestLogDeleteManyArgs} args - Arguments to filter ApiRequestLogs to delete.
     * @example
     * // Delete a few ApiRequestLogs
     * const { count } = await prisma.apiRequestLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiRequestLogDeleteManyArgs>(args?: SelectSubset<T, ApiRequestLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiRequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiRequestLogs
     * const apiRequestLog = await prisma.apiRequestLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiRequestLogUpdateManyArgs>(args: SelectSubset<T, ApiRequestLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiRequestLogs and returns the data updated in the database.
     * @param {ApiRequestLogUpdateManyAndReturnArgs} args - Arguments to update many ApiRequestLogs.
     * @example
     * // Update many ApiRequestLogs
     * const apiRequestLog = await prisma.apiRequestLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiRequestLogs and only return the `id`
     * const apiRequestLogWithIdOnly = await prisma.apiRequestLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiRequestLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiRequestLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiRequestLog.
     * @param {ApiRequestLogUpsertArgs} args - Arguments to update or create a ApiRequestLog.
     * @example
     * // Update or create a ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.upsert({
     *   create: {
     *     // ... data to create a ApiRequestLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiRequestLog we want to update
     *   }
     * })
     */
    upsert<T extends ApiRequestLogUpsertArgs>(args: SelectSubset<T, ApiRequestLogUpsertArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiRequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogCountArgs} args - Arguments to filter ApiRequestLogs to count.
     * @example
     * // Count the number of ApiRequestLogs
     * const count = await prisma.apiRequestLog.count({
     *   where: {
     *     // ... the filter for the ApiRequestLogs we want to count
     *   }
     * })
    **/
    count<T extends ApiRequestLogCountArgs>(
      args?: Subset<T, ApiRequestLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiRequestLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiRequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiRequestLogAggregateArgs>(args: Subset<T, ApiRequestLogAggregateArgs>): Prisma.PrismaPromise<GetApiRequestLogAggregateType<T>>

    /**
     * Group by ApiRequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiRequestLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiRequestLogGroupByArgs['orderBy'] }
        : { orderBy?: ApiRequestLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiRequestLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiRequestLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiRequestLog model
   */
  readonly fields: ApiRequestLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiRequestLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiRequestLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiRequestLog model
   */
  interface ApiRequestLogFieldRefs {
    readonly id: FieldRef<"ApiRequestLog", 'String'>
    readonly requestId: FieldRef<"ApiRequestLog", 'String'>
    readonly method: FieldRef<"ApiRequestLog", 'String'>
    readonly path: FieldRef<"ApiRequestLog", 'String'>
    readonly statusCode: FieldRef<"ApiRequestLog", 'Int'>
    readonly durationMs: FieldRef<"ApiRequestLog", 'Int'>
    readonly ipHash: FieldRef<"ApiRequestLog", 'String'>
    readonly userAgent: FieldRef<"ApiRequestLog", 'String'>
    readonly isError: FieldRef<"ApiRequestLog", 'Boolean'>
    readonly createdAt: FieldRef<"ApiRequestLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiRequestLog findUnique
   */
  export type ApiRequestLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLog to fetch.
     */
    where: ApiRequestLogWhereUniqueInput
  }

  /**
   * ApiRequestLog findUniqueOrThrow
   */
  export type ApiRequestLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLog to fetch.
     */
    where: ApiRequestLogWhereUniqueInput
  }

  /**
   * ApiRequestLog findFirst
   */
  export type ApiRequestLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLog to fetch.
     */
    where?: ApiRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiRequestLogs to fetch.
     */
    orderBy?: ApiRequestLogOrderByWithRelationInput | ApiRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiRequestLogs.
     */
    cursor?: ApiRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiRequestLogs.
     */
    distinct?: ApiRequestLogScalarFieldEnum | ApiRequestLogScalarFieldEnum[]
  }

  /**
   * ApiRequestLog findFirstOrThrow
   */
  export type ApiRequestLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLog to fetch.
     */
    where?: ApiRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiRequestLogs to fetch.
     */
    orderBy?: ApiRequestLogOrderByWithRelationInput | ApiRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiRequestLogs.
     */
    cursor?: ApiRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiRequestLogs.
     */
    distinct?: ApiRequestLogScalarFieldEnum | ApiRequestLogScalarFieldEnum[]
  }

  /**
   * ApiRequestLog findMany
   */
  export type ApiRequestLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLogs to fetch.
     */
    where?: ApiRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiRequestLogs to fetch.
     */
    orderBy?: ApiRequestLogOrderByWithRelationInput | ApiRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiRequestLogs.
     */
    cursor?: ApiRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiRequestLogs.
     */
    distinct?: ApiRequestLogScalarFieldEnum | ApiRequestLogScalarFieldEnum[]
  }

  /**
   * ApiRequestLog create
   */
  export type ApiRequestLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ApiRequestLog.
     */
    data: XOR<ApiRequestLogCreateInput, ApiRequestLogUncheckedCreateInput>
  }

  /**
   * ApiRequestLog createMany
   */
  export type ApiRequestLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiRequestLogs.
     */
    data: ApiRequestLogCreateManyInput | ApiRequestLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiRequestLog createManyAndReturn
   */
  export type ApiRequestLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The data used to create many ApiRequestLogs.
     */
    data: ApiRequestLogCreateManyInput | ApiRequestLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiRequestLog update
   */
  export type ApiRequestLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ApiRequestLog.
     */
    data: XOR<ApiRequestLogUpdateInput, ApiRequestLogUncheckedUpdateInput>
    /**
     * Choose, which ApiRequestLog to update.
     */
    where: ApiRequestLogWhereUniqueInput
  }

  /**
   * ApiRequestLog updateMany
   */
  export type ApiRequestLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiRequestLogs.
     */
    data: XOR<ApiRequestLogUpdateManyMutationInput, ApiRequestLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiRequestLogs to update
     */
    where?: ApiRequestLogWhereInput
    /**
     * Limit how many ApiRequestLogs to update.
     */
    limit?: number
  }

  /**
   * ApiRequestLog updateManyAndReturn
   */
  export type ApiRequestLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The data used to update ApiRequestLogs.
     */
    data: XOR<ApiRequestLogUpdateManyMutationInput, ApiRequestLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiRequestLogs to update
     */
    where?: ApiRequestLogWhereInput
    /**
     * Limit how many ApiRequestLogs to update.
     */
    limit?: number
  }

  /**
   * ApiRequestLog upsert
   */
  export type ApiRequestLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ApiRequestLog to update in case it exists.
     */
    where: ApiRequestLogWhereUniqueInput
    /**
     * In case the ApiRequestLog found by the `where` argument doesn't exist, create a new ApiRequestLog with this data.
     */
    create: XOR<ApiRequestLogCreateInput, ApiRequestLogUncheckedCreateInput>
    /**
     * In case the ApiRequestLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiRequestLogUpdateInput, ApiRequestLogUncheckedUpdateInput>
  }

  /**
   * ApiRequestLog delete
   */
  export type ApiRequestLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter which ApiRequestLog to delete.
     */
    where: ApiRequestLogWhereUniqueInput
  }

  /**
   * ApiRequestLog deleteMany
   */
  export type ApiRequestLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiRequestLogs to delete
     */
    where?: ApiRequestLogWhereInput
    /**
     * Limit how many ApiRequestLogs to delete.
     */
    limit?: number
  }

  /**
   * ApiRequestLog without action
   */
  export type ApiRequestLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
  }


  /**
   * Model TranscriptionLog
   */

  export type AggregateTranscriptionLog = {
    _count: TranscriptionLogCountAggregateOutputType | null
    _avg: TranscriptionLogAvgAggregateOutputType | null
    _sum: TranscriptionLogSumAggregateOutputType | null
    _min: TranscriptionLogMinAggregateOutputType | null
    _max: TranscriptionLogMaxAggregateOutputType | null
  }

  export type TranscriptionLogAvgAggregateOutputType = {
    audioSizeBytes: number | null
    approximateAudioSeconds: number | null
  }

  export type TranscriptionLogSumAggregateOutputType = {
    audioSizeBytes: number | null
    approximateAudioSeconds: number | null
  }

  export type TranscriptionLogMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    audioSizeBytes: number | null
    approximateAudioSeconds: number | null
    transcriptHash: string | null
    transcriptPreview: string | null
    createdAt: Date | null
  }

  export type TranscriptionLogMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    audioSizeBytes: number | null
    approximateAudioSeconds: number | null
    transcriptHash: string | null
    transcriptPreview: string | null
    createdAt: Date | null
  }

  export type TranscriptionLogCountAggregateOutputType = {
    id: number
    requestId: number
    audioSizeBytes: number
    approximateAudioSeconds: number
    transcriptHash: number
    transcriptPreview: number
    createdAt: number
    _all: number
  }


  export type TranscriptionLogAvgAggregateInputType = {
    audioSizeBytes?: true
    approximateAudioSeconds?: true
  }

  export type TranscriptionLogSumAggregateInputType = {
    audioSizeBytes?: true
    approximateAudioSeconds?: true
  }

  export type TranscriptionLogMinAggregateInputType = {
    id?: true
    requestId?: true
    audioSizeBytes?: true
    approximateAudioSeconds?: true
    transcriptHash?: true
    transcriptPreview?: true
    createdAt?: true
  }

  export type TranscriptionLogMaxAggregateInputType = {
    id?: true
    requestId?: true
    audioSizeBytes?: true
    approximateAudioSeconds?: true
    transcriptHash?: true
    transcriptPreview?: true
    createdAt?: true
  }

  export type TranscriptionLogCountAggregateInputType = {
    id?: true
    requestId?: true
    audioSizeBytes?: true
    approximateAudioSeconds?: true
    transcriptHash?: true
    transcriptPreview?: true
    createdAt?: true
    _all?: true
  }

  export type TranscriptionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranscriptionLog to aggregate.
     */
    where?: TranscriptionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptionLogs to fetch.
     */
    orderBy?: TranscriptionLogOrderByWithRelationInput | TranscriptionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranscriptionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TranscriptionLogs
    **/
    _count?: true | TranscriptionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranscriptionLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranscriptionLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranscriptionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranscriptionLogMaxAggregateInputType
  }

  export type GetTranscriptionLogAggregateType<T extends TranscriptionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTranscriptionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranscriptionLog[P]>
      : GetScalarType<T[P], AggregateTranscriptionLog[P]>
  }




  export type TranscriptionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscriptionLogWhereInput
    orderBy?: TranscriptionLogOrderByWithAggregationInput | TranscriptionLogOrderByWithAggregationInput[]
    by: TranscriptionLogScalarFieldEnum[] | TranscriptionLogScalarFieldEnum
    having?: TranscriptionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranscriptionLogCountAggregateInputType | true
    _avg?: TranscriptionLogAvgAggregateInputType
    _sum?: TranscriptionLogSumAggregateInputType
    _min?: TranscriptionLogMinAggregateInputType
    _max?: TranscriptionLogMaxAggregateInputType
  }

  export type TranscriptionLogGroupByOutputType = {
    id: string
    requestId: string
    audioSizeBytes: number | null
    approximateAudioSeconds: number | null
    transcriptHash: string | null
    transcriptPreview: string | null
    createdAt: Date
    _count: TranscriptionLogCountAggregateOutputType | null
    _avg: TranscriptionLogAvgAggregateOutputType | null
    _sum: TranscriptionLogSumAggregateOutputType | null
    _min: TranscriptionLogMinAggregateOutputType | null
    _max: TranscriptionLogMaxAggregateOutputType | null
  }

  type GetTranscriptionLogGroupByPayload<T extends TranscriptionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranscriptionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranscriptionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranscriptionLogGroupByOutputType[P]>
            : GetScalarType<T[P], TranscriptionLogGroupByOutputType[P]>
        }
      >
    >


  export type TranscriptionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    audioSizeBytes?: boolean
    approximateAudioSeconds?: boolean
    transcriptHash?: boolean
    transcriptPreview?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transcriptionLog"]>

  export type TranscriptionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    audioSizeBytes?: boolean
    approximateAudioSeconds?: boolean
    transcriptHash?: boolean
    transcriptPreview?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transcriptionLog"]>

  export type TranscriptionLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    audioSizeBytes?: boolean
    approximateAudioSeconds?: boolean
    transcriptHash?: boolean
    transcriptPreview?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transcriptionLog"]>

  export type TranscriptionLogSelectScalar = {
    id?: boolean
    requestId?: boolean
    audioSizeBytes?: boolean
    approximateAudioSeconds?: boolean
    transcriptHash?: boolean
    transcriptPreview?: boolean
    createdAt?: boolean
  }

  export type TranscriptionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "audioSizeBytes" | "approximateAudioSeconds" | "transcriptHash" | "transcriptPreview" | "createdAt", ExtArgs["result"]["transcriptionLog"]>

  export type $TranscriptionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TranscriptionLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      audioSizeBytes: number | null
      approximateAudioSeconds: number | null
      transcriptHash: string | null
      transcriptPreview: string | null
      createdAt: Date
    }, ExtArgs["result"]["transcriptionLog"]>
    composites: {}
  }

  type TranscriptionLogGetPayload<S extends boolean | null | undefined | TranscriptionLogDefaultArgs> = $Result.GetResult<Prisma.$TranscriptionLogPayload, S>

  type TranscriptionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranscriptionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranscriptionLogCountAggregateInputType | true
    }

  export interface TranscriptionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TranscriptionLog'], meta: { name: 'TranscriptionLog' } }
    /**
     * Find zero or one TranscriptionLog that matches the filter.
     * @param {TranscriptionLogFindUniqueArgs} args - Arguments to find a TranscriptionLog
     * @example
     * // Get one TranscriptionLog
     * const transcriptionLog = await prisma.transcriptionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranscriptionLogFindUniqueArgs>(args: SelectSubset<T, TranscriptionLogFindUniqueArgs<ExtArgs>>): Prisma__TranscriptionLogClient<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TranscriptionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranscriptionLogFindUniqueOrThrowArgs} args - Arguments to find a TranscriptionLog
     * @example
     * // Get one TranscriptionLog
     * const transcriptionLog = await prisma.transcriptionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranscriptionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TranscriptionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranscriptionLogClient<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranscriptionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionLogFindFirstArgs} args - Arguments to find a TranscriptionLog
     * @example
     * // Get one TranscriptionLog
     * const transcriptionLog = await prisma.transcriptionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranscriptionLogFindFirstArgs>(args?: SelectSubset<T, TranscriptionLogFindFirstArgs<ExtArgs>>): Prisma__TranscriptionLogClient<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranscriptionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionLogFindFirstOrThrowArgs} args - Arguments to find a TranscriptionLog
     * @example
     * // Get one TranscriptionLog
     * const transcriptionLog = await prisma.transcriptionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranscriptionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TranscriptionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranscriptionLogClient<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TranscriptionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TranscriptionLogs
     * const transcriptionLogs = await prisma.transcriptionLog.findMany()
     * 
     * // Get first 10 TranscriptionLogs
     * const transcriptionLogs = await prisma.transcriptionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transcriptionLogWithIdOnly = await prisma.transcriptionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranscriptionLogFindManyArgs>(args?: SelectSubset<T, TranscriptionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TranscriptionLog.
     * @param {TranscriptionLogCreateArgs} args - Arguments to create a TranscriptionLog.
     * @example
     * // Create one TranscriptionLog
     * const TranscriptionLog = await prisma.transcriptionLog.create({
     *   data: {
     *     // ... data to create a TranscriptionLog
     *   }
     * })
     * 
     */
    create<T extends TranscriptionLogCreateArgs>(args: SelectSubset<T, TranscriptionLogCreateArgs<ExtArgs>>): Prisma__TranscriptionLogClient<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TranscriptionLogs.
     * @param {TranscriptionLogCreateManyArgs} args - Arguments to create many TranscriptionLogs.
     * @example
     * // Create many TranscriptionLogs
     * const transcriptionLog = await prisma.transcriptionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranscriptionLogCreateManyArgs>(args?: SelectSubset<T, TranscriptionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TranscriptionLogs and returns the data saved in the database.
     * @param {TranscriptionLogCreateManyAndReturnArgs} args - Arguments to create many TranscriptionLogs.
     * @example
     * // Create many TranscriptionLogs
     * const transcriptionLog = await prisma.transcriptionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TranscriptionLogs and only return the `id`
     * const transcriptionLogWithIdOnly = await prisma.transcriptionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranscriptionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TranscriptionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TranscriptionLog.
     * @param {TranscriptionLogDeleteArgs} args - Arguments to delete one TranscriptionLog.
     * @example
     * // Delete one TranscriptionLog
     * const TranscriptionLog = await prisma.transcriptionLog.delete({
     *   where: {
     *     // ... filter to delete one TranscriptionLog
     *   }
     * })
     * 
     */
    delete<T extends TranscriptionLogDeleteArgs>(args: SelectSubset<T, TranscriptionLogDeleteArgs<ExtArgs>>): Prisma__TranscriptionLogClient<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TranscriptionLog.
     * @param {TranscriptionLogUpdateArgs} args - Arguments to update one TranscriptionLog.
     * @example
     * // Update one TranscriptionLog
     * const transcriptionLog = await prisma.transcriptionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranscriptionLogUpdateArgs>(args: SelectSubset<T, TranscriptionLogUpdateArgs<ExtArgs>>): Prisma__TranscriptionLogClient<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TranscriptionLogs.
     * @param {TranscriptionLogDeleteManyArgs} args - Arguments to filter TranscriptionLogs to delete.
     * @example
     * // Delete a few TranscriptionLogs
     * const { count } = await prisma.transcriptionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranscriptionLogDeleteManyArgs>(args?: SelectSubset<T, TranscriptionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranscriptionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TranscriptionLogs
     * const transcriptionLog = await prisma.transcriptionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranscriptionLogUpdateManyArgs>(args: SelectSubset<T, TranscriptionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranscriptionLogs and returns the data updated in the database.
     * @param {TranscriptionLogUpdateManyAndReturnArgs} args - Arguments to update many TranscriptionLogs.
     * @example
     * // Update many TranscriptionLogs
     * const transcriptionLog = await prisma.transcriptionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TranscriptionLogs and only return the `id`
     * const transcriptionLogWithIdOnly = await prisma.transcriptionLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranscriptionLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TranscriptionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TranscriptionLog.
     * @param {TranscriptionLogUpsertArgs} args - Arguments to update or create a TranscriptionLog.
     * @example
     * // Update or create a TranscriptionLog
     * const transcriptionLog = await prisma.transcriptionLog.upsert({
     *   create: {
     *     // ... data to create a TranscriptionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TranscriptionLog we want to update
     *   }
     * })
     */
    upsert<T extends TranscriptionLogUpsertArgs>(args: SelectSubset<T, TranscriptionLogUpsertArgs<ExtArgs>>): Prisma__TranscriptionLogClient<$Result.GetResult<Prisma.$TranscriptionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TranscriptionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionLogCountArgs} args - Arguments to filter TranscriptionLogs to count.
     * @example
     * // Count the number of TranscriptionLogs
     * const count = await prisma.transcriptionLog.count({
     *   where: {
     *     // ... the filter for the TranscriptionLogs we want to count
     *   }
     * })
    **/
    count<T extends TranscriptionLogCountArgs>(
      args?: Subset<T, TranscriptionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranscriptionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TranscriptionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TranscriptionLogAggregateArgs>(args: Subset<T, TranscriptionLogAggregateArgs>): Prisma.PrismaPromise<GetTranscriptionLogAggregateType<T>>

    /**
     * Group by TranscriptionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TranscriptionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranscriptionLogGroupByArgs['orderBy'] }
        : { orderBy?: TranscriptionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TranscriptionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscriptionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TranscriptionLog model
   */
  readonly fields: TranscriptionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TranscriptionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranscriptionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TranscriptionLog model
   */
  interface TranscriptionLogFieldRefs {
    readonly id: FieldRef<"TranscriptionLog", 'String'>
    readonly requestId: FieldRef<"TranscriptionLog", 'String'>
    readonly audioSizeBytes: FieldRef<"TranscriptionLog", 'Int'>
    readonly approximateAudioSeconds: FieldRef<"TranscriptionLog", 'Int'>
    readonly transcriptHash: FieldRef<"TranscriptionLog", 'String'>
    readonly transcriptPreview: FieldRef<"TranscriptionLog", 'String'>
    readonly createdAt: FieldRef<"TranscriptionLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TranscriptionLog findUnique
   */
  export type TranscriptionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * Filter, which TranscriptionLog to fetch.
     */
    where: TranscriptionLogWhereUniqueInput
  }

  /**
   * TranscriptionLog findUniqueOrThrow
   */
  export type TranscriptionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * Filter, which TranscriptionLog to fetch.
     */
    where: TranscriptionLogWhereUniqueInput
  }

  /**
   * TranscriptionLog findFirst
   */
  export type TranscriptionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * Filter, which TranscriptionLog to fetch.
     */
    where?: TranscriptionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptionLogs to fetch.
     */
    orderBy?: TranscriptionLogOrderByWithRelationInput | TranscriptionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranscriptionLogs.
     */
    cursor?: TranscriptionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranscriptionLogs.
     */
    distinct?: TranscriptionLogScalarFieldEnum | TranscriptionLogScalarFieldEnum[]
  }

  /**
   * TranscriptionLog findFirstOrThrow
   */
  export type TranscriptionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * Filter, which TranscriptionLog to fetch.
     */
    where?: TranscriptionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptionLogs to fetch.
     */
    orderBy?: TranscriptionLogOrderByWithRelationInput | TranscriptionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranscriptionLogs.
     */
    cursor?: TranscriptionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranscriptionLogs.
     */
    distinct?: TranscriptionLogScalarFieldEnum | TranscriptionLogScalarFieldEnum[]
  }

  /**
   * TranscriptionLog findMany
   */
  export type TranscriptionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * Filter, which TranscriptionLogs to fetch.
     */
    where?: TranscriptionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptionLogs to fetch.
     */
    orderBy?: TranscriptionLogOrderByWithRelationInput | TranscriptionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TranscriptionLogs.
     */
    cursor?: TranscriptionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranscriptionLogs.
     */
    distinct?: TranscriptionLogScalarFieldEnum | TranscriptionLogScalarFieldEnum[]
  }

  /**
   * TranscriptionLog create
   */
  export type TranscriptionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * The data needed to create a TranscriptionLog.
     */
    data: XOR<TranscriptionLogCreateInput, TranscriptionLogUncheckedCreateInput>
  }

  /**
   * TranscriptionLog createMany
   */
  export type TranscriptionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TranscriptionLogs.
     */
    data: TranscriptionLogCreateManyInput | TranscriptionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranscriptionLog createManyAndReturn
   */
  export type TranscriptionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * The data used to create many TranscriptionLogs.
     */
    data: TranscriptionLogCreateManyInput | TranscriptionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranscriptionLog update
   */
  export type TranscriptionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * The data needed to update a TranscriptionLog.
     */
    data: XOR<TranscriptionLogUpdateInput, TranscriptionLogUncheckedUpdateInput>
    /**
     * Choose, which TranscriptionLog to update.
     */
    where: TranscriptionLogWhereUniqueInput
  }

  /**
   * TranscriptionLog updateMany
   */
  export type TranscriptionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TranscriptionLogs.
     */
    data: XOR<TranscriptionLogUpdateManyMutationInput, TranscriptionLogUncheckedUpdateManyInput>
    /**
     * Filter which TranscriptionLogs to update
     */
    where?: TranscriptionLogWhereInput
    /**
     * Limit how many TranscriptionLogs to update.
     */
    limit?: number
  }

  /**
   * TranscriptionLog updateManyAndReturn
   */
  export type TranscriptionLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * The data used to update TranscriptionLogs.
     */
    data: XOR<TranscriptionLogUpdateManyMutationInput, TranscriptionLogUncheckedUpdateManyInput>
    /**
     * Filter which TranscriptionLogs to update
     */
    where?: TranscriptionLogWhereInput
    /**
     * Limit how many TranscriptionLogs to update.
     */
    limit?: number
  }

  /**
   * TranscriptionLog upsert
   */
  export type TranscriptionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * The filter to search for the TranscriptionLog to update in case it exists.
     */
    where: TranscriptionLogWhereUniqueInput
    /**
     * In case the TranscriptionLog found by the `where` argument doesn't exist, create a new TranscriptionLog with this data.
     */
    create: XOR<TranscriptionLogCreateInput, TranscriptionLogUncheckedCreateInput>
    /**
     * In case the TranscriptionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranscriptionLogUpdateInput, TranscriptionLogUncheckedUpdateInput>
  }

  /**
   * TranscriptionLog delete
   */
  export type TranscriptionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
    /**
     * Filter which TranscriptionLog to delete.
     */
    where: TranscriptionLogWhereUniqueInput
  }

  /**
   * TranscriptionLog deleteMany
   */
  export type TranscriptionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranscriptionLogs to delete
     */
    where?: TranscriptionLogWhereInput
    /**
     * Limit how many TranscriptionLogs to delete.
     */
    limit?: number
  }

  /**
   * TranscriptionLog without action
   */
  export type TranscriptionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionLog
     */
    select?: TranscriptionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionLog
     */
    omit?: TranscriptionLogOmit<ExtArgs> | null
  }


  /**
   * Model AnalysisHint
   */

  export type AggregateAnalysisHint = {
    _count: AnalysisHintCountAggregateOutputType | null
    _avg: AnalysisHintAvgAggregateOutputType | null
    _sum: AnalysisHintSumAggregateOutputType | null
    _min: AnalysisHintMinAggregateOutputType | null
    _max: AnalysisHintMaxAggregateOutputType | null
  }

  export type AnalysisHintAvgAggregateOutputType = {
    confidence: number | null
  }

  export type AnalysisHintSumAggregateOutputType = {
    confidence: number | null
  }

  export type AnalysisHintMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    hasReference: boolean | null
    confidence: number | null
    referenceType: string | null
    source: string | null
    detectedPhrase: string | null
    meaning: string | null
    socialTone: string | null
    suggestedReply: string | null
    shortAudioHint: string | null
    textHash: string | null
    textPreview: string | null
    language: string | null
    mode: string | null
    createdAt: Date | null
  }

  export type AnalysisHintMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    hasReference: boolean | null
    confidence: number | null
    referenceType: string | null
    source: string | null
    detectedPhrase: string | null
    meaning: string | null
    socialTone: string | null
    suggestedReply: string | null
    shortAudioHint: string | null
    textHash: string | null
    textPreview: string | null
    language: string | null
    mode: string | null
    createdAt: Date | null
  }

  export type AnalysisHintCountAggregateOutputType = {
    id: number
    requestId: number
    hasReference: number
    confidence: number
    referenceType: number
    source: number
    detectedPhrase: number
    meaning: number
    socialTone: number
    suggestedReply: number
    shortAudioHint: number
    textHash: number
    textPreview: number
    language: number
    mode: number
    createdAt: number
    _all: number
  }


  export type AnalysisHintAvgAggregateInputType = {
    confidence?: true
  }

  export type AnalysisHintSumAggregateInputType = {
    confidence?: true
  }

  export type AnalysisHintMinAggregateInputType = {
    id?: true
    requestId?: true
    hasReference?: true
    confidence?: true
    referenceType?: true
    source?: true
    detectedPhrase?: true
    meaning?: true
    socialTone?: true
    suggestedReply?: true
    shortAudioHint?: true
    textHash?: true
    textPreview?: true
    language?: true
    mode?: true
    createdAt?: true
  }

  export type AnalysisHintMaxAggregateInputType = {
    id?: true
    requestId?: true
    hasReference?: true
    confidence?: true
    referenceType?: true
    source?: true
    detectedPhrase?: true
    meaning?: true
    socialTone?: true
    suggestedReply?: true
    shortAudioHint?: true
    textHash?: true
    textPreview?: true
    language?: true
    mode?: true
    createdAt?: true
  }

  export type AnalysisHintCountAggregateInputType = {
    id?: true
    requestId?: true
    hasReference?: true
    confidence?: true
    referenceType?: true
    source?: true
    detectedPhrase?: true
    meaning?: true
    socialTone?: true
    suggestedReply?: true
    shortAudioHint?: true
    textHash?: true
    textPreview?: true
    language?: true
    mode?: true
    createdAt?: true
    _all?: true
  }

  export type AnalysisHintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisHint to aggregate.
     */
    where?: AnalysisHintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHints to fetch.
     */
    orderBy?: AnalysisHintOrderByWithRelationInput | AnalysisHintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisHintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisHints
    **/
    _count?: true | AnalysisHintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisHintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisHintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisHintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisHintMaxAggregateInputType
  }

  export type GetAnalysisHintAggregateType<T extends AnalysisHintAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisHint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisHint[P]>
      : GetScalarType<T[P], AggregateAnalysisHint[P]>
  }




  export type AnalysisHintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisHintWhereInput
    orderBy?: AnalysisHintOrderByWithAggregationInput | AnalysisHintOrderByWithAggregationInput[]
    by: AnalysisHintScalarFieldEnum[] | AnalysisHintScalarFieldEnum
    having?: AnalysisHintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisHintCountAggregateInputType | true
    _avg?: AnalysisHintAvgAggregateInputType
    _sum?: AnalysisHintSumAggregateInputType
    _min?: AnalysisHintMinAggregateInputType
    _max?: AnalysisHintMaxAggregateInputType
  }

  export type AnalysisHintGroupByOutputType = {
    id: string
    requestId: string | null
    hasReference: boolean
    confidence: number
    referenceType: string | null
    source: string | null
    detectedPhrase: string | null
    meaning: string | null
    socialTone: string | null
    suggestedReply: string | null
    shortAudioHint: string | null
    textHash: string | null
    textPreview: string | null
    language: string | null
    mode: string | null
    createdAt: Date
    _count: AnalysisHintCountAggregateOutputType | null
    _avg: AnalysisHintAvgAggregateOutputType | null
    _sum: AnalysisHintSumAggregateOutputType | null
    _min: AnalysisHintMinAggregateOutputType | null
    _max: AnalysisHintMaxAggregateOutputType | null
  }

  type GetAnalysisHintGroupByPayload<T extends AnalysisHintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisHintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisHintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisHintGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisHintGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisHintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    hasReference?: boolean
    confidence?: boolean
    referenceType?: boolean
    source?: boolean
    detectedPhrase?: boolean
    meaning?: boolean
    socialTone?: boolean
    suggestedReply?: boolean
    shortAudioHint?: boolean
    textHash?: boolean
    textPreview?: boolean
    language?: boolean
    mode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analysisHint"]>

  export type AnalysisHintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    hasReference?: boolean
    confidence?: boolean
    referenceType?: boolean
    source?: boolean
    detectedPhrase?: boolean
    meaning?: boolean
    socialTone?: boolean
    suggestedReply?: boolean
    shortAudioHint?: boolean
    textHash?: boolean
    textPreview?: boolean
    language?: boolean
    mode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analysisHint"]>

  export type AnalysisHintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    hasReference?: boolean
    confidence?: boolean
    referenceType?: boolean
    source?: boolean
    detectedPhrase?: boolean
    meaning?: boolean
    socialTone?: boolean
    suggestedReply?: boolean
    shortAudioHint?: boolean
    textHash?: boolean
    textPreview?: boolean
    language?: boolean
    mode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analysisHint"]>

  export type AnalysisHintSelectScalar = {
    id?: boolean
    requestId?: boolean
    hasReference?: boolean
    confidence?: boolean
    referenceType?: boolean
    source?: boolean
    detectedPhrase?: boolean
    meaning?: boolean
    socialTone?: boolean
    suggestedReply?: boolean
    shortAudioHint?: boolean
    textHash?: boolean
    textPreview?: boolean
    language?: boolean
    mode?: boolean
    createdAt?: boolean
  }

  export type AnalysisHintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "hasReference" | "confidence" | "referenceType" | "source" | "detectedPhrase" | "meaning" | "socialTone" | "suggestedReply" | "shortAudioHint" | "textHash" | "textPreview" | "language" | "mode" | "createdAt", ExtArgs["result"]["analysisHint"]>

  export type $AnalysisHintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisHint"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string | null
      hasReference: boolean
      confidence: number
      referenceType: string | null
      source: string | null
      detectedPhrase: string | null
      meaning: string | null
      socialTone: string | null
      suggestedReply: string | null
      shortAudioHint: string | null
      textHash: string | null
      textPreview: string | null
      language: string | null
      mode: string | null
      createdAt: Date
    }, ExtArgs["result"]["analysisHint"]>
    composites: {}
  }

  type AnalysisHintGetPayload<S extends boolean | null | undefined | AnalysisHintDefaultArgs> = $Result.GetResult<Prisma.$AnalysisHintPayload, S>

  type AnalysisHintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisHintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisHintCountAggregateInputType | true
    }

  export interface AnalysisHintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisHint'], meta: { name: 'AnalysisHint' } }
    /**
     * Find zero or one AnalysisHint that matches the filter.
     * @param {AnalysisHintFindUniqueArgs} args - Arguments to find a AnalysisHint
     * @example
     * // Get one AnalysisHint
     * const analysisHint = await prisma.analysisHint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisHintFindUniqueArgs>(args: SelectSubset<T, AnalysisHintFindUniqueArgs<ExtArgs>>): Prisma__AnalysisHintClient<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisHint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisHintFindUniqueOrThrowArgs} args - Arguments to find a AnalysisHint
     * @example
     * // Get one AnalysisHint
     * const analysisHint = await prisma.analysisHint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisHintFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisHintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisHintClient<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisHint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHintFindFirstArgs} args - Arguments to find a AnalysisHint
     * @example
     * // Get one AnalysisHint
     * const analysisHint = await prisma.analysisHint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisHintFindFirstArgs>(args?: SelectSubset<T, AnalysisHintFindFirstArgs<ExtArgs>>): Prisma__AnalysisHintClient<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisHint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHintFindFirstOrThrowArgs} args - Arguments to find a AnalysisHint
     * @example
     * // Get one AnalysisHint
     * const analysisHint = await prisma.analysisHint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisHintFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisHintFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisHintClient<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisHints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisHints
     * const analysisHints = await prisma.analysisHint.findMany()
     * 
     * // Get first 10 AnalysisHints
     * const analysisHints = await prisma.analysisHint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisHintWithIdOnly = await prisma.analysisHint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisHintFindManyArgs>(args?: SelectSubset<T, AnalysisHintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisHint.
     * @param {AnalysisHintCreateArgs} args - Arguments to create a AnalysisHint.
     * @example
     * // Create one AnalysisHint
     * const AnalysisHint = await prisma.analysisHint.create({
     *   data: {
     *     // ... data to create a AnalysisHint
     *   }
     * })
     * 
     */
    create<T extends AnalysisHintCreateArgs>(args: SelectSubset<T, AnalysisHintCreateArgs<ExtArgs>>): Prisma__AnalysisHintClient<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisHints.
     * @param {AnalysisHintCreateManyArgs} args - Arguments to create many AnalysisHints.
     * @example
     * // Create many AnalysisHints
     * const analysisHint = await prisma.analysisHint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisHintCreateManyArgs>(args?: SelectSubset<T, AnalysisHintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisHints and returns the data saved in the database.
     * @param {AnalysisHintCreateManyAndReturnArgs} args - Arguments to create many AnalysisHints.
     * @example
     * // Create many AnalysisHints
     * const analysisHint = await prisma.analysisHint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisHints and only return the `id`
     * const analysisHintWithIdOnly = await prisma.analysisHint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisHintCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisHintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisHint.
     * @param {AnalysisHintDeleteArgs} args - Arguments to delete one AnalysisHint.
     * @example
     * // Delete one AnalysisHint
     * const AnalysisHint = await prisma.analysisHint.delete({
     *   where: {
     *     // ... filter to delete one AnalysisHint
     *   }
     * })
     * 
     */
    delete<T extends AnalysisHintDeleteArgs>(args: SelectSubset<T, AnalysisHintDeleteArgs<ExtArgs>>): Prisma__AnalysisHintClient<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisHint.
     * @param {AnalysisHintUpdateArgs} args - Arguments to update one AnalysisHint.
     * @example
     * // Update one AnalysisHint
     * const analysisHint = await prisma.analysisHint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisHintUpdateArgs>(args: SelectSubset<T, AnalysisHintUpdateArgs<ExtArgs>>): Prisma__AnalysisHintClient<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisHints.
     * @param {AnalysisHintDeleteManyArgs} args - Arguments to filter AnalysisHints to delete.
     * @example
     * // Delete a few AnalysisHints
     * const { count } = await prisma.analysisHint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisHintDeleteManyArgs>(args?: SelectSubset<T, AnalysisHintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisHints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisHints
     * const analysisHint = await prisma.analysisHint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisHintUpdateManyArgs>(args: SelectSubset<T, AnalysisHintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisHints and returns the data updated in the database.
     * @param {AnalysisHintUpdateManyAndReturnArgs} args - Arguments to update many AnalysisHints.
     * @example
     * // Update many AnalysisHints
     * const analysisHint = await prisma.analysisHint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisHints and only return the `id`
     * const analysisHintWithIdOnly = await prisma.analysisHint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisHintUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisHintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisHint.
     * @param {AnalysisHintUpsertArgs} args - Arguments to update or create a AnalysisHint.
     * @example
     * // Update or create a AnalysisHint
     * const analysisHint = await prisma.analysisHint.upsert({
     *   create: {
     *     // ... data to create a AnalysisHint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisHint we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisHintUpsertArgs>(args: SelectSubset<T, AnalysisHintUpsertArgs<ExtArgs>>): Prisma__AnalysisHintClient<$Result.GetResult<Prisma.$AnalysisHintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisHints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHintCountArgs} args - Arguments to filter AnalysisHints to count.
     * @example
     * // Count the number of AnalysisHints
     * const count = await prisma.analysisHint.count({
     *   where: {
     *     // ... the filter for the AnalysisHints we want to count
     *   }
     * })
    **/
    count<T extends AnalysisHintCountArgs>(
      args?: Subset<T, AnalysisHintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisHintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisHint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalysisHintAggregateArgs>(args: Subset<T, AnalysisHintAggregateArgs>): Prisma.PrismaPromise<GetAnalysisHintAggregateType<T>>

    /**
     * Group by AnalysisHint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalysisHintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisHintGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisHintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalysisHintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisHintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisHint model
   */
  readonly fields: AnalysisHintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisHint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisHintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalysisHint model
   */
  interface AnalysisHintFieldRefs {
    readonly id: FieldRef<"AnalysisHint", 'String'>
    readonly requestId: FieldRef<"AnalysisHint", 'String'>
    readonly hasReference: FieldRef<"AnalysisHint", 'Boolean'>
    readonly confidence: FieldRef<"AnalysisHint", 'Float'>
    readonly referenceType: FieldRef<"AnalysisHint", 'String'>
    readonly source: FieldRef<"AnalysisHint", 'String'>
    readonly detectedPhrase: FieldRef<"AnalysisHint", 'String'>
    readonly meaning: FieldRef<"AnalysisHint", 'String'>
    readonly socialTone: FieldRef<"AnalysisHint", 'String'>
    readonly suggestedReply: FieldRef<"AnalysisHint", 'String'>
    readonly shortAudioHint: FieldRef<"AnalysisHint", 'String'>
    readonly textHash: FieldRef<"AnalysisHint", 'String'>
    readonly textPreview: FieldRef<"AnalysisHint", 'String'>
    readonly language: FieldRef<"AnalysisHint", 'String'>
    readonly mode: FieldRef<"AnalysisHint", 'String'>
    readonly createdAt: FieldRef<"AnalysisHint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisHint findUnique
   */
  export type AnalysisHintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHint to fetch.
     */
    where: AnalysisHintWhereUniqueInput
  }

  /**
   * AnalysisHint findUniqueOrThrow
   */
  export type AnalysisHintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHint to fetch.
     */
    where: AnalysisHintWhereUniqueInput
  }

  /**
   * AnalysisHint findFirst
   */
  export type AnalysisHintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHint to fetch.
     */
    where?: AnalysisHintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHints to fetch.
     */
    orderBy?: AnalysisHintOrderByWithRelationInput | AnalysisHintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisHints.
     */
    cursor?: AnalysisHintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisHints.
     */
    distinct?: AnalysisHintScalarFieldEnum | AnalysisHintScalarFieldEnum[]
  }

  /**
   * AnalysisHint findFirstOrThrow
   */
  export type AnalysisHintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHint to fetch.
     */
    where?: AnalysisHintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHints to fetch.
     */
    orderBy?: AnalysisHintOrderByWithRelationInput | AnalysisHintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisHints.
     */
    cursor?: AnalysisHintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisHints.
     */
    distinct?: AnalysisHintScalarFieldEnum | AnalysisHintScalarFieldEnum[]
  }

  /**
   * AnalysisHint findMany
   */
  export type AnalysisHintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHints to fetch.
     */
    where?: AnalysisHintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHints to fetch.
     */
    orderBy?: AnalysisHintOrderByWithRelationInput | AnalysisHintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisHints.
     */
    cursor?: AnalysisHintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisHints.
     */
    distinct?: AnalysisHintScalarFieldEnum | AnalysisHintScalarFieldEnum[]
  }

  /**
   * AnalysisHint create
   */
  export type AnalysisHintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalysisHint.
     */
    data?: XOR<AnalysisHintCreateInput, AnalysisHintUncheckedCreateInput>
  }

  /**
   * AnalysisHint createMany
   */
  export type AnalysisHintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisHints.
     */
    data: AnalysisHintCreateManyInput | AnalysisHintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisHint createManyAndReturn
   */
  export type AnalysisHintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisHints.
     */
    data: AnalysisHintCreateManyInput | AnalysisHintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisHint update
   */
  export type AnalysisHintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalysisHint.
     */
    data: XOR<AnalysisHintUpdateInput, AnalysisHintUncheckedUpdateInput>
    /**
     * Choose, which AnalysisHint to update.
     */
    where: AnalysisHintWhereUniqueInput
  }

  /**
   * AnalysisHint updateMany
   */
  export type AnalysisHintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisHints.
     */
    data: XOR<AnalysisHintUpdateManyMutationInput, AnalysisHintUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisHints to update
     */
    where?: AnalysisHintWhereInput
    /**
     * Limit how many AnalysisHints to update.
     */
    limit?: number
  }

  /**
   * AnalysisHint updateManyAndReturn
   */
  export type AnalysisHintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisHints.
     */
    data: XOR<AnalysisHintUpdateManyMutationInput, AnalysisHintUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisHints to update
     */
    where?: AnalysisHintWhereInput
    /**
     * Limit how many AnalysisHints to update.
     */
    limit?: number
  }

  /**
   * AnalysisHint upsert
   */
  export type AnalysisHintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalysisHint to update in case it exists.
     */
    where: AnalysisHintWhereUniqueInput
    /**
     * In case the AnalysisHint found by the `where` argument doesn't exist, create a new AnalysisHint with this data.
     */
    create: XOR<AnalysisHintCreateInput, AnalysisHintUncheckedCreateInput>
    /**
     * In case the AnalysisHint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisHintUpdateInput, AnalysisHintUncheckedUpdateInput>
  }

  /**
   * AnalysisHint delete
   */
  export type AnalysisHintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
    /**
     * Filter which AnalysisHint to delete.
     */
    where: AnalysisHintWhereUniqueInput
  }

  /**
   * AnalysisHint deleteMany
   */
  export type AnalysisHintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisHints to delete
     */
    where?: AnalysisHintWhereInput
    /**
     * Limit how many AnalysisHints to delete.
     */
    limit?: number
  }

  /**
   * AnalysisHint without action
   */
  export type AnalysisHintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHint
     */
    select?: AnalysisHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHint
     */
    omit?: AnalysisHintOmit<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    hintId: string | null
    requestId: string | null
    rating: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    hintId: string | null
    requestId: string | null
    rating: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    hintId: number
    requestId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    id?: true
    hintId?: true
    requestId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    hintId?: true
    requestId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    hintId?: true
    requestId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    hintId: string | null
    requestId: string | null
    rating: string
    comment: string | null
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hintId?: boolean
    requestId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hintId?: boolean
    requestId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hintId?: boolean
    requestId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    hintId?: boolean
    requestId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hintId" | "requestId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["feedback"]>

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hintId: string | null
      requestId: string | null
      rating: string
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly hintId: FieldRef<"Feedback", 'String'>
    readonly requestId: FieldRef<"Feedback", 'String'>
    readonly rating: FieldRef<"Feedback", 'String'>
    readonly comment: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApiRequestLogScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    method: 'method',
    path: 'path',
    statusCode: 'statusCode',
    durationMs: 'durationMs',
    ipHash: 'ipHash',
    userAgent: 'userAgent',
    isError: 'isError',
    createdAt: 'createdAt'
  };

  export type ApiRequestLogScalarFieldEnum = (typeof ApiRequestLogScalarFieldEnum)[keyof typeof ApiRequestLogScalarFieldEnum]


  export const TranscriptionLogScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    audioSizeBytes: 'audioSizeBytes',
    approximateAudioSeconds: 'approximateAudioSeconds',
    transcriptHash: 'transcriptHash',
    transcriptPreview: 'transcriptPreview',
    createdAt: 'createdAt'
  };

  export type TranscriptionLogScalarFieldEnum = (typeof TranscriptionLogScalarFieldEnum)[keyof typeof TranscriptionLogScalarFieldEnum]


  export const AnalysisHintScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    hasReference: 'hasReference',
    confidence: 'confidence',
    referenceType: 'referenceType',
    source: 'source',
    detectedPhrase: 'detectedPhrase',
    meaning: 'meaning',
    socialTone: 'socialTone',
    suggestedReply: 'suggestedReply',
    shortAudioHint: 'shortAudioHint',
    textHash: 'textHash',
    textPreview: 'textPreview',
    language: 'language',
    mode: 'mode',
    createdAt: 'createdAt'
  };

  export type AnalysisHintScalarFieldEnum = (typeof AnalysisHintScalarFieldEnum)[keyof typeof AnalysisHintScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    hintId: 'hintId',
    requestId: 'requestId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ApiRequestLogWhereInput = {
    AND?: ApiRequestLogWhereInput | ApiRequestLogWhereInput[]
    OR?: ApiRequestLogWhereInput[]
    NOT?: ApiRequestLogWhereInput | ApiRequestLogWhereInput[]
    id?: StringFilter<"ApiRequestLog"> | string
    requestId?: StringFilter<"ApiRequestLog"> | string
    method?: StringFilter<"ApiRequestLog"> | string
    path?: StringFilter<"ApiRequestLog"> | string
    statusCode?: IntFilter<"ApiRequestLog"> | number
    durationMs?: IntFilter<"ApiRequestLog"> | number
    ipHash?: StringNullableFilter<"ApiRequestLog"> | string | null
    userAgent?: StringNullableFilter<"ApiRequestLog"> | string | null
    isError?: BoolFilter<"ApiRequestLog"> | boolean
    createdAt?: DateTimeFilter<"ApiRequestLog"> | Date | string
  }

  export type ApiRequestLogOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    isError?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiRequestLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: ApiRequestLogWhereInput | ApiRequestLogWhereInput[]
    OR?: ApiRequestLogWhereInput[]
    NOT?: ApiRequestLogWhereInput | ApiRequestLogWhereInput[]
    method?: StringFilter<"ApiRequestLog"> | string
    path?: StringFilter<"ApiRequestLog"> | string
    statusCode?: IntFilter<"ApiRequestLog"> | number
    durationMs?: IntFilter<"ApiRequestLog"> | number
    ipHash?: StringNullableFilter<"ApiRequestLog"> | string | null
    userAgent?: StringNullableFilter<"ApiRequestLog"> | string | null
    isError?: BoolFilter<"ApiRequestLog"> | boolean
    createdAt?: DateTimeFilter<"ApiRequestLog"> | Date | string
  }, "id" | "requestId">

  export type ApiRequestLogOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    isError?: SortOrder
    createdAt?: SortOrder
    _count?: ApiRequestLogCountOrderByAggregateInput
    _avg?: ApiRequestLogAvgOrderByAggregateInput
    _max?: ApiRequestLogMaxOrderByAggregateInput
    _min?: ApiRequestLogMinOrderByAggregateInput
    _sum?: ApiRequestLogSumOrderByAggregateInput
  }

  export type ApiRequestLogScalarWhereWithAggregatesInput = {
    AND?: ApiRequestLogScalarWhereWithAggregatesInput | ApiRequestLogScalarWhereWithAggregatesInput[]
    OR?: ApiRequestLogScalarWhereWithAggregatesInput[]
    NOT?: ApiRequestLogScalarWhereWithAggregatesInput | ApiRequestLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiRequestLog"> | string
    requestId?: StringWithAggregatesFilter<"ApiRequestLog"> | string
    method?: StringWithAggregatesFilter<"ApiRequestLog"> | string
    path?: StringWithAggregatesFilter<"ApiRequestLog"> | string
    statusCode?: IntWithAggregatesFilter<"ApiRequestLog"> | number
    durationMs?: IntWithAggregatesFilter<"ApiRequestLog"> | number
    ipHash?: StringNullableWithAggregatesFilter<"ApiRequestLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ApiRequestLog"> | string | null
    isError?: BoolWithAggregatesFilter<"ApiRequestLog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ApiRequestLog"> | Date | string
  }

  export type TranscriptionLogWhereInput = {
    AND?: TranscriptionLogWhereInput | TranscriptionLogWhereInput[]
    OR?: TranscriptionLogWhereInput[]
    NOT?: TranscriptionLogWhereInput | TranscriptionLogWhereInput[]
    id?: StringFilter<"TranscriptionLog"> | string
    requestId?: StringFilter<"TranscriptionLog"> | string
    audioSizeBytes?: IntNullableFilter<"TranscriptionLog"> | number | null
    approximateAudioSeconds?: IntNullableFilter<"TranscriptionLog"> | number | null
    transcriptHash?: StringNullableFilter<"TranscriptionLog"> | string | null
    transcriptPreview?: StringNullableFilter<"TranscriptionLog"> | string | null
    createdAt?: DateTimeFilter<"TranscriptionLog"> | Date | string
  }

  export type TranscriptionLogOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    audioSizeBytes?: SortOrderInput | SortOrder
    approximateAudioSeconds?: SortOrderInput | SortOrder
    transcriptHash?: SortOrderInput | SortOrder
    transcriptPreview?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type TranscriptionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: TranscriptionLogWhereInput | TranscriptionLogWhereInput[]
    OR?: TranscriptionLogWhereInput[]
    NOT?: TranscriptionLogWhereInput | TranscriptionLogWhereInput[]
    audioSizeBytes?: IntNullableFilter<"TranscriptionLog"> | number | null
    approximateAudioSeconds?: IntNullableFilter<"TranscriptionLog"> | number | null
    transcriptHash?: StringNullableFilter<"TranscriptionLog"> | string | null
    transcriptPreview?: StringNullableFilter<"TranscriptionLog"> | string | null
    createdAt?: DateTimeFilter<"TranscriptionLog"> | Date | string
  }, "id" | "requestId">

  export type TranscriptionLogOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    audioSizeBytes?: SortOrderInput | SortOrder
    approximateAudioSeconds?: SortOrderInput | SortOrder
    transcriptHash?: SortOrderInput | SortOrder
    transcriptPreview?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TranscriptionLogCountOrderByAggregateInput
    _avg?: TranscriptionLogAvgOrderByAggregateInput
    _max?: TranscriptionLogMaxOrderByAggregateInput
    _min?: TranscriptionLogMinOrderByAggregateInput
    _sum?: TranscriptionLogSumOrderByAggregateInput
  }

  export type TranscriptionLogScalarWhereWithAggregatesInput = {
    AND?: TranscriptionLogScalarWhereWithAggregatesInput | TranscriptionLogScalarWhereWithAggregatesInput[]
    OR?: TranscriptionLogScalarWhereWithAggregatesInput[]
    NOT?: TranscriptionLogScalarWhereWithAggregatesInput | TranscriptionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TranscriptionLog"> | string
    requestId?: StringWithAggregatesFilter<"TranscriptionLog"> | string
    audioSizeBytes?: IntNullableWithAggregatesFilter<"TranscriptionLog"> | number | null
    approximateAudioSeconds?: IntNullableWithAggregatesFilter<"TranscriptionLog"> | number | null
    transcriptHash?: StringNullableWithAggregatesFilter<"TranscriptionLog"> | string | null
    transcriptPreview?: StringNullableWithAggregatesFilter<"TranscriptionLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TranscriptionLog"> | Date | string
  }

  export type AnalysisHintWhereInput = {
    AND?: AnalysisHintWhereInput | AnalysisHintWhereInput[]
    OR?: AnalysisHintWhereInput[]
    NOT?: AnalysisHintWhereInput | AnalysisHintWhereInput[]
    id?: StringFilter<"AnalysisHint"> | string
    requestId?: StringNullableFilter<"AnalysisHint"> | string | null
    hasReference?: BoolFilter<"AnalysisHint"> | boolean
    confidence?: FloatFilter<"AnalysisHint"> | number
    referenceType?: StringNullableFilter<"AnalysisHint"> | string | null
    source?: StringNullableFilter<"AnalysisHint"> | string | null
    detectedPhrase?: StringNullableFilter<"AnalysisHint"> | string | null
    meaning?: StringNullableFilter<"AnalysisHint"> | string | null
    socialTone?: StringNullableFilter<"AnalysisHint"> | string | null
    suggestedReply?: StringNullableFilter<"AnalysisHint"> | string | null
    shortAudioHint?: StringNullableFilter<"AnalysisHint"> | string | null
    textHash?: StringNullableFilter<"AnalysisHint"> | string | null
    textPreview?: StringNullableFilter<"AnalysisHint"> | string | null
    language?: StringNullableFilter<"AnalysisHint"> | string | null
    mode?: StringNullableFilter<"AnalysisHint"> | string | null
    createdAt?: DateTimeFilter<"AnalysisHint"> | Date | string
  }

  export type AnalysisHintOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrderInput | SortOrder
    hasReference?: SortOrder
    confidence?: SortOrder
    referenceType?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    detectedPhrase?: SortOrderInput | SortOrder
    meaning?: SortOrderInput | SortOrder
    socialTone?: SortOrderInput | SortOrder
    suggestedReply?: SortOrderInput | SortOrder
    shortAudioHint?: SortOrderInput | SortOrder
    textHash?: SortOrderInput | SortOrder
    textPreview?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    mode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisHintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: AnalysisHintWhereInput | AnalysisHintWhereInput[]
    OR?: AnalysisHintWhereInput[]
    NOT?: AnalysisHintWhereInput | AnalysisHintWhereInput[]
    hasReference?: BoolFilter<"AnalysisHint"> | boolean
    confidence?: FloatFilter<"AnalysisHint"> | number
    referenceType?: StringNullableFilter<"AnalysisHint"> | string | null
    source?: StringNullableFilter<"AnalysisHint"> | string | null
    detectedPhrase?: StringNullableFilter<"AnalysisHint"> | string | null
    meaning?: StringNullableFilter<"AnalysisHint"> | string | null
    socialTone?: StringNullableFilter<"AnalysisHint"> | string | null
    suggestedReply?: StringNullableFilter<"AnalysisHint"> | string | null
    shortAudioHint?: StringNullableFilter<"AnalysisHint"> | string | null
    textHash?: StringNullableFilter<"AnalysisHint"> | string | null
    textPreview?: StringNullableFilter<"AnalysisHint"> | string | null
    language?: StringNullableFilter<"AnalysisHint"> | string | null
    mode?: StringNullableFilter<"AnalysisHint"> | string | null
    createdAt?: DateTimeFilter<"AnalysisHint"> | Date | string
  }, "id" | "requestId">

  export type AnalysisHintOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrderInput | SortOrder
    hasReference?: SortOrder
    confidence?: SortOrder
    referenceType?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    detectedPhrase?: SortOrderInput | SortOrder
    meaning?: SortOrderInput | SortOrder
    socialTone?: SortOrderInput | SortOrder
    suggestedReply?: SortOrderInput | SortOrder
    shortAudioHint?: SortOrderInput | SortOrder
    textHash?: SortOrderInput | SortOrder
    textPreview?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    mode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalysisHintCountOrderByAggregateInput
    _avg?: AnalysisHintAvgOrderByAggregateInput
    _max?: AnalysisHintMaxOrderByAggregateInput
    _min?: AnalysisHintMinOrderByAggregateInput
    _sum?: AnalysisHintSumOrderByAggregateInput
  }

  export type AnalysisHintScalarWhereWithAggregatesInput = {
    AND?: AnalysisHintScalarWhereWithAggregatesInput | AnalysisHintScalarWhereWithAggregatesInput[]
    OR?: AnalysisHintScalarWhereWithAggregatesInput[]
    NOT?: AnalysisHintScalarWhereWithAggregatesInput | AnalysisHintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisHint"> | string
    requestId?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    hasReference?: BoolWithAggregatesFilter<"AnalysisHint"> | boolean
    confidence?: FloatWithAggregatesFilter<"AnalysisHint"> | number
    referenceType?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    source?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    detectedPhrase?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    meaning?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    socialTone?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    suggestedReply?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    shortAudioHint?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    textHash?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    textPreview?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    language?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    mode?: StringNullableWithAggregatesFilter<"AnalysisHint"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnalysisHint"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    hintId?: StringNullableFilter<"Feedback"> | string | null
    requestId?: StringNullableFilter<"Feedback"> | string | null
    rating?: StringFilter<"Feedback"> | string
    comment?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    hintId?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    hintId?: StringNullableFilter<"Feedback"> | string | null
    requestId?: StringNullableFilter<"Feedback"> | string | null
    rating?: StringFilter<"Feedback"> | string
    comment?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    hintId?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    hintId?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    requestId?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    rating?: StringWithAggregatesFilter<"Feedback"> | string
    comment?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type ApiRequestLogCreateInput = {
    id?: string
    requestId: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ipHash?: string | null
    userAgent?: string | null
    isError?: boolean
    createdAt?: Date | string
  }

  export type ApiRequestLogUncheckedCreateInput = {
    id?: string
    requestId: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ipHash?: string | null
    userAgent?: string | null
    isError?: boolean
    createdAt?: Date | string
  }

  export type ApiRequestLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isError?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiRequestLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isError?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiRequestLogCreateManyInput = {
    id?: string
    requestId: string
    method: string
    path: string
    statusCode: number
    durationMs: number
    ipHash?: string | null
    userAgent?: string | null
    isError?: boolean
    createdAt?: Date | string
  }

  export type ApiRequestLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isError?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiRequestLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isError?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptionLogCreateInput = {
    id?: string
    requestId: string
    audioSizeBytes?: number | null
    approximateAudioSeconds?: number | null
    transcriptHash?: string | null
    transcriptPreview?: string | null
    createdAt?: Date | string
  }

  export type TranscriptionLogUncheckedCreateInput = {
    id?: string
    requestId: string
    audioSizeBytes?: number | null
    approximateAudioSeconds?: number | null
    transcriptHash?: string | null
    transcriptPreview?: string | null
    createdAt?: Date | string
  }

  export type TranscriptionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    audioSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    approximateAudioSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    transcriptHash?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptPreview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    audioSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    approximateAudioSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    transcriptHash?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptPreview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptionLogCreateManyInput = {
    id?: string
    requestId: string
    audioSizeBytes?: number | null
    approximateAudioSeconds?: number | null
    transcriptHash?: string | null
    transcriptPreview?: string | null
    createdAt?: Date | string
  }

  export type TranscriptionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    audioSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    approximateAudioSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    transcriptHash?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptPreview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscriptionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    audioSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    approximateAudioSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    transcriptHash?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptPreview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHintCreateInput = {
    id?: string
    requestId?: string | null
    hasReference?: boolean
    confidence?: number
    referenceType?: string | null
    source?: string | null
    detectedPhrase?: string | null
    meaning?: string | null
    socialTone?: string | null
    suggestedReply?: string | null
    shortAudioHint?: string | null
    textHash?: string | null
    textPreview?: string | null
    language?: string | null
    mode?: string | null
    createdAt?: Date | string
  }

  export type AnalysisHintUncheckedCreateInput = {
    id?: string
    requestId?: string | null
    hasReference?: boolean
    confidence?: number
    referenceType?: string | null
    source?: string | null
    detectedPhrase?: string | null
    meaning?: string | null
    socialTone?: string | null
    suggestedReply?: string | null
    shortAudioHint?: string | null
    textHash?: string | null
    textPreview?: string | null
    language?: string | null
    mode?: string | null
    createdAt?: Date | string
  }

  export type AnalysisHintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    hasReference?: BoolFieldUpdateOperationsInput | boolean
    confidence?: FloatFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPhrase?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    socialTone?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedReply?: NullableStringFieldUpdateOperationsInput | string | null
    shortAudioHint?: NullableStringFieldUpdateOperationsInput | string | null
    textHash?: NullableStringFieldUpdateOperationsInput | string | null
    textPreview?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    hasReference?: BoolFieldUpdateOperationsInput | boolean
    confidence?: FloatFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPhrase?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    socialTone?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedReply?: NullableStringFieldUpdateOperationsInput | string | null
    shortAudioHint?: NullableStringFieldUpdateOperationsInput | string | null
    textHash?: NullableStringFieldUpdateOperationsInput | string | null
    textPreview?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHintCreateManyInput = {
    id?: string
    requestId?: string | null
    hasReference?: boolean
    confidence?: number
    referenceType?: string | null
    source?: string | null
    detectedPhrase?: string | null
    meaning?: string | null
    socialTone?: string | null
    suggestedReply?: string | null
    shortAudioHint?: string | null
    textHash?: string | null
    textPreview?: string | null
    language?: string | null
    mode?: string | null
    createdAt?: Date | string
  }

  export type AnalysisHintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    hasReference?: BoolFieldUpdateOperationsInput | boolean
    confidence?: FloatFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPhrase?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    socialTone?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedReply?: NullableStringFieldUpdateOperationsInput | string | null
    shortAudioHint?: NullableStringFieldUpdateOperationsInput | string | null
    textHash?: NullableStringFieldUpdateOperationsInput | string | null
    textPreview?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    hasReference?: BoolFieldUpdateOperationsInput | boolean
    confidence?: FloatFieldUpdateOperationsInput | number
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    detectedPhrase?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    socialTone?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedReply?: NullableStringFieldUpdateOperationsInput | string | null
    shortAudioHint?: NullableStringFieldUpdateOperationsInput | string | null
    textHash?: NullableStringFieldUpdateOperationsInput | string | null
    textPreview?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    hintId?: string | null
    requestId?: string | null
    rating: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    hintId?: string | null
    requestId?: string | null
    rating: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hintId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hintId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    hintId?: string | null
    requestId?: string | null
    rating: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hintId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hintId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiRequestLogCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ipHash?: SortOrder
    userAgent?: SortOrder
    isError?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiRequestLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    durationMs?: SortOrder
  }

  export type ApiRequestLogMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ipHash?: SortOrder
    userAgent?: SortOrder
    isError?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiRequestLogMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    durationMs?: SortOrder
    ipHash?: SortOrder
    userAgent?: SortOrder
    isError?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiRequestLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
    durationMs?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TranscriptionLogCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    audioSizeBytes?: SortOrder
    approximateAudioSeconds?: SortOrder
    transcriptHash?: SortOrder
    transcriptPreview?: SortOrder
    createdAt?: SortOrder
  }

  export type TranscriptionLogAvgOrderByAggregateInput = {
    audioSizeBytes?: SortOrder
    approximateAudioSeconds?: SortOrder
  }

  export type TranscriptionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    audioSizeBytes?: SortOrder
    approximateAudioSeconds?: SortOrder
    transcriptHash?: SortOrder
    transcriptPreview?: SortOrder
    createdAt?: SortOrder
  }

  export type TranscriptionLogMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    audioSizeBytes?: SortOrder
    approximateAudioSeconds?: SortOrder
    transcriptHash?: SortOrder
    transcriptPreview?: SortOrder
    createdAt?: SortOrder
  }

  export type TranscriptionLogSumOrderByAggregateInput = {
    audioSizeBytes?: SortOrder
    approximateAudioSeconds?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AnalysisHintCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    hasReference?: SortOrder
    confidence?: SortOrder
    referenceType?: SortOrder
    source?: SortOrder
    detectedPhrase?: SortOrder
    meaning?: SortOrder
    socialTone?: SortOrder
    suggestedReply?: SortOrder
    shortAudioHint?: SortOrder
    textHash?: SortOrder
    textPreview?: SortOrder
    language?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisHintAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type AnalysisHintMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    hasReference?: SortOrder
    confidence?: SortOrder
    referenceType?: SortOrder
    source?: SortOrder
    detectedPhrase?: SortOrder
    meaning?: SortOrder
    socialTone?: SortOrder
    suggestedReply?: SortOrder
    shortAudioHint?: SortOrder
    textHash?: SortOrder
    textPreview?: SortOrder
    language?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisHintMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    hasReference?: SortOrder
    confidence?: SortOrder
    referenceType?: SortOrder
    source?: SortOrder
    detectedPhrase?: SortOrder
    meaning?: SortOrder
    socialTone?: SortOrder
    suggestedReply?: SortOrder
    shortAudioHint?: SortOrder
    textHash?: SortOrder
    textPreview?: SortOrder
    language?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisHintSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    hintId?: SortOrder
    requestId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    hintId?: SortOrder
    requestId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    hintId?: SortOrder
    requestId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}