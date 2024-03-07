(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './html-internal-html-core-runtime.js', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib.js', './ktor-ktor-client-core.js', './ktor-ktor-client-content-negotiation.js', './ktor-ktor-client-resources.js', './ktor-ktor-http.js', './ktor-ktor-serialization-kotlinx-json.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-resources.js', './ktor-ktor-utils.js', './html-html-core.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./html-internal-html-core-runtime.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-client-content-negotiation.js'), require('./ktor-ktor-client-resources.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-serialization-kotlinx-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-resources.js'), require('./ktor-ktor-utils.js'), require('./html-html-core.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'ktor-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-content-negotiation' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['ktor-ktor-client-resources'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'ktor-ktor-client-resources' was not found. Please, check whether 'ktor-ktor-client-resources' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'ktor-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['ktor-ktor-resources'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'ktor-ktor-resources' was not found. Please, check whether 'ktor-ktor-resources' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.minutiae:minutiae'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.minutiae:minutiae'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'com.minutiae:minutiae'.");
    }
    root['com.minutiae:minutiae'] = factory(typeof this['com.minutiae:minutiae'] === 'undefined' ? {} : this['com.minutiae:minutiae'], this['html-internal-html-core-runtime'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['ktor-ktor-client-core'], this['ktor-ktor-client-content-negotiation'], this['ktor-ktor-client-resources'], this['ktor-ktor-http'], this['ktor-ktor-serialization-kotlinx-json'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-resources'], this['ktor-ktor-utils'], this['html-html-core'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_client_resources, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_resources, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Unit_getInstance = kotlin_kotlin.$_$.e5;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var protoOf = kotlin_kotlin.$_$.qc;
  var objectMeta = kotlin_kotlin.$_$.pc;
  var setMetadataFor = kotlin_kotlin.$_$.rc;
  var defaultRequest = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var Resources_getInstance = kotlin_io_ktor_ktor_client_resources.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var contentType = kotlin_io_ktor_ktor_http.$_$.h1;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.ra;
  var resources = kotlin_io_ktor_ktor_client_resources.$_$.b;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.i;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.ch;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var THROW_CCE = kotlin_kotlin.$_$.ng;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var isInterface = kotlin_kotlin.$_$.dc;
  var href = kotlin_io_ktor_ktor_resources.$_$.d;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.l;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ba;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.b;
  var List = kotlin_kotlin.$_$.x5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var classMeta = kotlin_kotlin.$_$.hb;
  var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.m;
  var VOID = kotlin_kotlin.$_$.g;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var KMutableProperty1 = kotlin_kotlin.$_$.id;
  var getPropertyCallableRef = kotlin_kotlin.$_$.qb;
  var getStringHashCode = kotlin_kotlin.$_$.rb;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var Default_getInstance = kotlin_kotlin.$_$.t4;
  var toMutableList = kotlin_kotlin.$_$.r9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var numberToInt = kotlin_kotlin.$_$.mc;
  var toMutableList_0 = kotlin_kotlin.$_$.q9;
  var plus = kotlin_kotlin.$_$.u8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var P$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var KMutableProperty0 = kotlin_kotlin.$_$.hd;
  var interfaceMeta = kotlin_kotlin.$_$.ub;
  var split = kotlin_kotlin.$_$.xe;
  var to = kotlin_kotlin.$_$.yh;
  var listOf = kotlin_kotlin.$_$.k8;
  var emptyList = kotlin_kotlin.$_$.i7;
  var listOf_0 = kotlin_kotlin.$_$.l8;
  var addAll = kotlin_kotlin.$_$.k6;
  var ensureNotNull = kotlin_kotlin.$_$.hh;
  var removeFirst = kotlin_kotlin.$_$.x8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var random = kotlin_kotlin.$_$.v8;
  var disabled = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var SuspendFunction1 = kotlin_kotlin.$_$.sa;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var textAlign = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var cursor = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var fontWeight = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var textDecoration = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var KProperty1 = kotlin_kotlin.$_$.kd;
  var THROW_ISE = kotlin_kotlin.$_$.pg;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ob;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var toMutableMap = kotlin_kotlin.$_$.t9;
  var mapOf = kotlin_kotlin.$_$.n8;
  var getOrNull = kotlin_kotlin.$_$.v7;
  var equals = kotlin_kotlin.$_$.kb;
  var Iterable = kotlin_kotlin.$_$.s5;
  var emptyMap = kotlin_kotlin.$_$.j7;
  var toString = kotlin_kotlin.$_$.xh;
  var hashCode = kotlin_kotlin.$_$.sb;
  var getNumberHashCode = kotlin_kotlin.$_$.pb;
  var removeAll = kotlin_kotlin.$_$.w8;
  var count = kotlin_kotlin.$_$.g7;
  var first = kotlin_kotlin.$_$.t7;
  var shuffled = kotlin_kotlin.$_$.c9;
  var mapCapacity = kotlin_kotlin.$_$.m8;
  var coerceAtLeast = kotlin_kotlin.$_$.zc;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var objectCreate = kotlin_kotlin.$_$.oc;
  var getBooleanHashCode = kotlin_kotlin.$_$.nb;
  var Resource = kotlin_io_ktor_ktor_resources.$_$.c;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var THROW_IAE = kotlin_kotlin.$_$.og;
  var enumEntries = kotlin_kotlin.$_$.wa;
  var Enum = kotlin_kotlin.$_$.dg;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor($getQuestionsCOROUTINE$0, '$getQuestionsCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(TheTriviaAPI, 'TheTriviaAPI', objectMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AnswerInstance, 'AnswerInstance', classMeta);
  setMetadataFor(HEX, 'HEX', classMeta);
  setMetadataFor(GameInstance, 'GameInstance', classMeta, VOID, VOID, GameInstance);
  function renderSideBar(instance) {
    illegalDecoyCallException('renderSideBar');
  }
  function renderSideBar$composable(instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1485908547);
    if (isTraceInProgress()) {
      traceEventStart(1485908547, $changed, -1, 'com.minutiae.game.PlayScreen.renderSideBar$composable (PlayScreen.kt:9)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return false;
  }
  setMetadataFor(PlayScreen, 'PlayScreen', interfaceMeta);
  setMetadataFor(GameOver, 'GameOver', classMeta, VOID, [PlayScreen], GameOver);
  setMetadataFor(ComposableSingletons$GameOverKt, 'ComposableSingletons$GameOverKt', objectMeta);
  setMetadataFor(ComposableSingletons$MinutiaeKt, 'ComposableSingletons$MinutiaeKt', objectMeta);
  setMetadataFor(QuestionInstance, 'QuestionInstance', classMeta);
  setMetadataFor(ComposableSingletons$QuestionInstanceKt, 'ComposableSingletons$QuestionInstanceKt', objectMeta);
  setMetadataFor($checkQuestionsCOROUTINE$0, '$checkQuestionsCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($getQuestionCOROUTINE$1, '$getQuestionCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(QuestionPool, 'QuestionPool', objectMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(RoundInstance$updateQuestions$slambda, 'RoundInstance$updateQuestions$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($getQuestionInstanceCOROUTINE$0, '$getQuestionInstanceCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(RoundInstance, 'RoundInstance', classMeta, VOID, [PlayScreen], VOID, VOID, VOID, [2]);
  setMetadataFor(ComposableSingletons$RoundInstanceKt, 'ComposableSingletons$RoundInstanceKt', objectMeta);
  setMetadataFor(RoundOver, 'RoundOver', classMeta, VOID, [PlayScreen]);
  setMetadataFor(ComposableSingletons$RoundOverKt, 'ComposableSingletons$RoundOverKt', objectMeta);
  setMetadataFor(ShopInstance, 'ShopInstance', classMeta, VOID, [PlayScreen]);
  setMetadataFor(ComposableSingletons$ShopInstanceKt, 'ComposableSingletons$ShopInstanceKt', objectMeta);
  setMetadataFor(ActiveStyle, 'ActiveStyle', classMeta, StyleSheet);
  setMetadataFor(EventBus, 'EventBus', objectMeta);
  setMetadataFor(GameModifierEventHandler, 'GameModifierEventHandler', objectMeta);
  setMetadataFor(Event, 'Event', classMeta, VOID, VOID, Event);
  setMetadataFor(GameStartEvent, 'GameStartEvent', classMeta, Event);
  setMetadataFor(RunInfoEvent, 'RunInfoEvent', classMeta, Event);
  setMetadataFor(RequiredScoreEvent, 'RequiredScoreEvent', classMeta, Event);
  setMetadataFor(RoundWinEvent, 'RoundWinEvent', classMeta, Event);
  setMetadataFor(ScoreQuestionEvent, 'ScoreQuestionEvent', classMeta, Event);
  setMetadataFor(SelectCategoryEvent, 'SelectCategoryEvent', classMeta, Event);
  setMetadataFor(SkipQuestionEvent, 'SkipQuestionEvent', classMeta, Event);
  setMetadataFor(GameModifier, 'GameModifier', classMeta);
  setMetadataFor(GameModifierInstance, 'GameModifierInstance', classMeta);
  setMetadataFor(GameModifiers, 'GameModifiers', objectMeta, VOID, [Iterable]);
  setMetadataFor(GameModifierBuilder, 'GameModifierBuilder', classMeta);
  setMetadataFor(ComposableSingletons$GameModifiersKt, 'ComposableSingletons$GameModifiersKt', objectMeta);
  setMetadataFor(Themes, 'Themes', objectMeta);
  setMetadataFor(Theme, 'Theme', classMeta);
  setMetadataFor(Shades, 'Shades', classMeta);
  setMetadataFor(Weighted, 'Weighted', classMeta);
  setMetadataFor(MutableWeighted, 'MutableWeighted', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Question, 'Question', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Answer, 'Answer', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(QuestionText, 'QuestionText', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(QuestionRequest, 'QuestionRequest', classMeta, VOID, VOID, QuestionRequest, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Category, 'Category', classMeta, Enum);
  setMetadataFor(Difficulty, 'Difficulty', classMeta, Enum);
  //endregion
  function main() {
    GameModifierEventHandler_getInstance().listeners_uhfd9c_k$(EventBus_getInstance());
    renderComposable$composable('root', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2104360546, $changed, -1, 'com.minutiae.ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:10)');
      }
      Minutiae$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-2104360546, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function _get_client__j03y3k($this) {
    return $this.client_1;
  }
  function get_$stableprop() {
    return 0;
  }
  function TheTriviaAPI$client$lambda($this$HttpClient) {
    defaultRequest($this$HttpClient, TheTriviaAPI$client$lambda$lambda);
    var tmp = Plugin_getInstance();
    $this$HttpClient.install_6m4asv_k$(tmp, TheTriviaAPI$client$lambda$lambda_0);
    $this$HttpClient.install$default_lc5jjj_k$(Resources_getInstance());
    return Unit_getInstance();
  }
  function TheTriviaAPI$client$lambda$lambda($this$defaultRequest) {
    $this$defaultRequest.url_chgr8b_k$('https://the-trivia-api.com/');
    contentType($this$defaultRequest, Application_getInstance().get_Json_wo4ci9_k$());
    return Unit_getInstance();
  }
  function TheTriviaAPI$client$lambda$lambda_0($this$install) {
    json($this$install);
    return Unit_getInstance();
  }
  function $getQuestionsCOROUTINE$0(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.request_1 = request;
  }
  protoOf($getQuestionsCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1.client_1;
            var tmp_1 = this;
            tmp_1.resource1__1 = this.request_1;
            this.resources2__1 = resources(this.this0__1);
            var tmp_2 = this;
            tmp_2.this3__1 = this.this0__1;
            var tmp_3 = this;
            tmp_3.this4__1 = this.this3__1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            var resourcesFormat = this.resources2__1.get_resourcesFormat_u8ho4t_k$();
            var resource = this.resource1__1;
            var urlBuilder = this_0.get_url_18iuii_k$();
            var this_1 = serializer(createKType(getKClass(QuestionRequest), arrayOf([]), false));
            var serializer_0 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
            href(resourcesFormat, serializer_0, resource, urlBuilder);
            tmp_4.builder5__1 = this_0;
            this.builder5__1.set_method_hoo95u_k$(Companion_getInstance().get_Get_18jsxf_k$());
            var tmp_5 = this;
            tmp_5.this6__1 = this.this4__1;
            var tmp_6 = this;
            tmp_6.builder7__1 = this.builder5__1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = (new HttpStatement(this.builder7__1, this.this6__1)).execute_rsj18j_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.this8__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            var tmp_7 = this.this8__1.get_call_wojxrb_k$();
            var tmp_8 = JsType_getInstance();
            var tmp_9 = getKClass(List);
            var tmp_10;
            try {
              tmp_10 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Question), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_11;
              if ($p instanceof Error) {
                var cause = $p;
                tmp_11 = null;
              } else {
                throw $p;
              }
              tmp_10 = tmp_11;
            }

            suspendResult = tmp_7.bodyNullable_wn8z59_k$(typeInfoImpl(tmp_8, tmp_9, tmp_10), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function TheTriviaAPI() {
    TheTriviaAPI_instance = this;
    var tmp = this;
    var tmp_0 = Js_getInstance();
    tmp.client_1 = HttpClient(tmp_0, TheTriviaAPI$client$lambda);
    this.$stable_1 = 0;
  }
  protoOf(TheTriviaAPI).getQuestions_gjwgnb_k$ = function (request, $completion) {
    var tmp = new $getQuestionsCOROUTINE$0(this, request, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TheTriviaAPI).getQuestions$default_6hbjgy_k$ = function (request, $completion, $super) {
    request = request === VOID ? new QuestionRequest() : request;
    return $super === VOID ? this.getQuestions_gjwgnb_k$(request, $completion) : $super.getQuestions_gjwgnb_k$.call(this, request, $completion);
  };
  var TheTriviaAPI_instance;
  function TheTriviaAPI_getInstance() {
    if (TheTriviaAPI_instance == null)
      new TheTriviaAPI();
    return TheTriviaAPI_instance;
  }
  function _get_answer__ns4171($this) {
    return $this.answer_1;
  }
  function _set_picked__qrr2c7($this, _set____db54di) {
    var this_0 = $this.picked$delegate_1;
    picked$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_picked__s8hmyz($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.picked$delegate_1;
    picked$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function get_$stableprop_0() {
    return 0;
  }
  function AnswerInstance$render$composable$lambda$lambda(this$0, $questionInstance, $instance) {
    return function (it) {
      _set_picked__qrr2c7(this$0, true);
      $questionInstance.onGuess_unexvi_k$(this$0.answer_1.get_isCorrect_eq0myf_k$(), $instance);
      return Unit_getInstance();
    };
  }
  function AnswerInstance$render$composable$lambda(this$0, $questionInstance, $instance) {
    return function ($this$StyledText) {
      $this$StyledText.classes_ayghm2_k$([get_Styles().get_answer_b1mrbb_k$()]);
      var tmp;
      if (_get_picked__s8hmyz(this$0)) {
        $this$StyledText.classes_ayghm2_k$([get_Styles().get_wrongGuess_g9t83x_k$()]);
        tmp = Unit_getInstance();
      } else {
        $this$StyledText.onClick_q9cds6_k$(AnswerInstance$render$composable$lambda$lambda(this$0, $questionInstance, $instance));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AnswerInstance$render$composable$lambda_0($tmp0_rcvr, $questionInstance, $instance, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.render$composable_5ih57c_k$($questionInstance, $instance, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AnswerInstance(answer) {
    this.answer_1 = answer;
    this.picked$delegate_1 = mutableStateOf(false);
    this.$stable_1 = 0;
  }
  protoOf(AnswerInstance).get_text_wouvsm_k$ = function () {
    return this.answer_1.get_text_wouvsm_k$();
  };
  protoOf(AnswerInstance).render_b7qyn0_k$ = function (questionInstance, instance) {
    illegalDecoyCallException('render');
  };
  protoOf(AnswerInstance).render$composable_5ih57c_k$ = function (questionInstance, instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(9632934);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(questionInstance) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(instance) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(9632934, $dirty, -1, 'com.minutiae.game.AnswerInstance.render$composable (AnswerInstance.kt:14)');
      }
      var tmp = this.answer_1.get_text_wouvsm_k$();
      StyledText$composable(tmp, AnswerInstance$render$composable$lambda(this, questionInstance, instance), $composer_0, 0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(AnswerInstance$render$composable$lambda_0(this, questionInstance, instance, $changed));
    }
  };
  function picked$factory() {
    return getPropertyCallableRef('picked', 1, KMutableProperty1, function (receiver) {
      return _get_picked__s8hmyz(receiver);
    }, function (receiver, value) {
      return _set_picked__qrr2c7(receiver, value);
    });
  }
  function picked$factory_0() {
    return getPropertyCallableRef('picked', 1, KMutableProperty1, function (receiver) {
      return _get_picked__s8hmyz(receiver);
    }, function (receiver, value) {
      return _set_picked__qrr2c7(receiver, value);
    });
  }
  function assuming(condition, block) {
    return condition ? block() : null;
  }
  function sumOf(_this__u8e3s4, selector) {
    var sum = 0.0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.minutiae.game.sumOf.<anonymous>' call
      sum = sum + selector(element);
    }
    return sum;
  }
  function _get_code__d4z5dq($this) {
    return $this.code_1;
  }
  function component1($this) {
    return $this.code_1;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function HEX(code) {
    this.code_1 = code;
    this.$stable_1 = 0;
  }
  protoOf(HEX).toString = function () {
    return '#' + this.code_1;
  };
  protoOf(HEX).copy_a35qlh_k$ = function (code) {
    return new HEX(code);
  };
  protoOf(HEX).copy$default_azbmge_k$ = function (code, $super) {
    code = code === VOID ? this.code_1 : code;
    return $super === VOID ? this.copy_a35qlh_k$(code) : $super.copy_a35qlh_k$.call(this, code);
  };
  protoOf(HEX).hashCode = function () {
    return getStringHashCode(this.code_1);
  };
  protoOf(HEX).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HEX))
      return false;
    var tmp0_other_with_cast = other instanceof HEX ? other : THROW_CCE();
    if (!(this.code_1 === tmp0_other_with_cast.code_1))
      return false;
    return true;
  };
  function StyledText(value, attrs) {
    illegalDecoyCallException('StyledText');
  }
  function StyledInlineText(value, attrs) {
    illegalDecoyCallException('StyledInlineText');
  }
  function SimpleText(value) {
    illegalDecoyCallException('SimpleText');
  }
  function StandardButton(attrs, content) {
    illegalDecoyCallException('StandardButton');
  }
  function StyledText$composable(value, attrs, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(827405916);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(827405916, $dirty, -1, 'com.minutiae.game.StyledText$composable (Extensions.kt:22)');
      }
      var tmp = attrs_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.StyledText$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1055465700, true, StyledText$composable$lambda(value));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.StyledText$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp, tmp0, $composer_0, 48 | 14 & $dirty >> 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(StyledText$composable$lambda_0(value, attrs_0, $changed, $default));
    }
  }
  function StyledInlineText$composable(value, attrs, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(485020483);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(485020483, $dirty, -1, 'com.minutiae.game.StyledInlineText$composable (Extensions.kt:25)');
      }
      var tmp = attrs_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.StyledInlineText$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 68455914, true, StyledInlineText$composable$lambda(value));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.StyledInlineText$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Span$composable(tmp, tmp0, $composer_0, 48 | 14 & $dirty >> 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(StyledInlineText$composable$lambda_0(value, attrs_0, $changed, $default));
    }
  }
  function SimpleText$composable(value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(883175584);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(883175584, $dirty, -1, 'com.minutiae.game.SimpleText$composable (Extensions.kt:28)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1616167890);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.SimpleText$composable.<anonymous>' call
        var value_0 = SimpleText$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.SimpleText$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1461039497, true, SimpleText$composable$lambda_0(value));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.SimpleText$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Span$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SimpleText$composable$lambda_1(value, $changed));
    }
  }
  function StandardButton$composable(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(360576147);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(360576147, $dirty, -1, 'com.minutiae.game.StandardButton$composable (Extensions.kt:34)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1320058928);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.StandardButton$composable.<anonymous>' call
        var value = StandardButton$composable$lambda(attrs_0);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Button$composable(tmp0_group, content_0._v, $composer_0, 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(StandardButton$composable$lambda_0(attrs_0, content_0, $changed, $default));
    }
  }
  function StyledText$composable$lambda($value) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1055465700, $changed, -1, 'com.minutiae.game.StyledText$composable.<anonymous> (Extensions.kt:22)');
        }
        Text$composable($value, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function StyledText$composable$lambda_0($value, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      StyledText$composable($value, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function StyledInlineText$composable$lambda($value) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(68455914, $changed, -1, 'com.minutiae.game.StyledInlineText$composable.<anonymous> (Extensions.kt:25)');
        }
        Text$composable($value, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function StyledInlineText$composable$lambda_0($value, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      StyledInlineText$composable($value, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SimpleText$composable$lambda($this$Span) {
    $this$Span.classes_ayghm2_k$([get_Styles().get_simpleText_r6j5vs_k$()]);
    return Unit_getInstance();
  }
  function SimpleText$composable$lambda_0($value) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1461039497, $changed, -1, 'com.minutiae.game.SimpleText$composable.<anonymous> (Extensions.kt:28)');
        }
        Text$composable($value, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SimpleText$composable$lambda_1($value, $$changed) {
    return function ($composer, $force) {
      SimpleText$composable($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function StandardButton$composable$lambda($attrs) {
    return function ($this$Button) {
      $this$Button.classes_ayghm2_k$([get_Styles().get_standardButton_7iikrs_k$()]);
      var tmp0_safe_receiver = $attrs._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$Button);
      return Unit_getInstance();
    };
  }
  function StandardButton$composable$lambda_0($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      StandardButton$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function _set_modifiers__v4q053($this, _set____db54di) {
    var this_0 = $this.modifiers$delegate_1;
    modifiers$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function newRound($this) {
    var runInfo = $this.get_runInfo_qw73lc_k$();
    var requiredScore = $this.get_requiredScore_g4q58q_k$();
    return new RoundInstance(requiredScore, runInfo.get_questions_kyknz0_k$(), runInfo.get_skips_iykc6j_k$(), Default_getInstance());
  }
  function get_$stableprop_2() {
    return 0;
  }
  function GameInstance$modifiers$delegate$lambda(it) {
    return it.get_weight_lbhkzl_k$();
  }
  function GameInstance$render$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_wholeScreen_epjs0q_k$()]);
    return Unit_getInstance();
  }
  function GameInstance$render$composable$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_sidebar_za2g7h_k$()]);
    return Unit_getInstance();
  }
  function GameInstance$render$composable$lambda$lambda_0(this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-528773561, $changed, -1, 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous> (GameInstance.kt:92)');
        }
        if (!this$0.get_currentScreen_zelgpw_k$().renderSideBar$composable_ixdoa1_k$(this$0, $composer_0, 0)) {
          var runInfo = this$0.get_runInfo_qw73lc_k$();
          var tmp_0 = runInfo.get_questions_kyknz0_k$();
          var tmp_1 = runInfo.get_skips_iykc6j_k$();
          var tmp_2 = this$0.get_roundsPlayed_ljhy5d_k$();
          var tmp_3 = this$0.get_money_ivc80n_k$();
          Sidebar$composable(tmp_0, tmp_1, tmp_2, tmp_3, 0, 0, 0, 0, 0, $composer_0, 0, 496);
        }
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GameInstance$render$composable$lambda$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_playScreen_5r1361_k$()]);
    return Unit_getInstance();
  }
  function GameInstance$render$composable$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_modifierContainer_ujew5b_k$()]);
    return Unit_getInstance();
  }
  function GameInstance$render$composable$lambda$lambda$lambda_0(this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(22295121, $changed, -1, 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous> (GameInstance.kt:105)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this$0.get_modifiers_mxb6zx_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          element.renderInContainer$composable_556pkp_k$(this$0, $composer_0, 64);
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GameInstance$render$composable$lambda$lambda_2(this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1175705968, $changed, -1, 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous> (GameInstance.kt:104)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(1904706462);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = GameInstance$render$composable$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 22295121, true, GameInstance$render$composable$lambda$lambda$lambda_0(this$0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
        this$0.get_currentScreen_zelgpw_k$().render$composable_jfftuf_k$(this$0, $composer_0, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GameInstance$render$composable$lambda_0(this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1059780326, $changed, -1, 'com.minutiae.game.GameInstance.render$composable.<anonymous> (GameInstance.kt:91)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-986939203);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = GameInstance$render$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -528773561, true, GameInstance$render$composable$lambda$lambda_0(this$0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(-986938809);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = GameInstance$render$composable$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 1175705968, true, GameInstance$render$composable$lambda$lambda_2(this$0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_5(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp1_group, tmp0_0, $composer_0, 54, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GameInstance$render$composable$lambda_1($tmp1_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.render$composable_ymlqsu_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function GameInstance() {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var tmp_0 = toMutableList(GameModifiers_getInstance());
    var tmp_1 = Default_getInstance();
    var this_0 = takeRandomItems(tmp_0, tmp_1, 5, VOID, VOID, GameInstance$modifiers$delegate$lambda);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.minutiae.game.GameInstance.modifiers$delegate.<anonymous>' call
      var tmp$ret$0 = item.getInstance_rhh4hh_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.modifiers$delegate_1 = mutableStateOf(destination);
    this.roundsPlayed$delegate_1 = mutableStateOf(0);
    this.money$delegate_1 = mutableStateOf(0);
    this.currentScreen$delegate_1 = mutableStateOf(newRound(this));
    EventBus_getInstance().post_4asmox_k$(new GameStartEvent(this));
    this.$stable_1 = 0;
  }
  protoOf(GameInstance).get_modifiers_mxb6zx_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.modifiers$delegate_1;
    modifiers$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(GameInstance).set_roundsPlayed_a9kl77_k$ = function (_set____db54di) {
    var this_0 = this.roundsPlayed$delegate_1;
    roundsPlayed$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(GameInstance).get_roundsPlayed_ljhy5d_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.roundsPlayed$delegate_1;
    roundsPlayed$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(GameInstance).set_money_m5avsr_k$ = function (_set____db54di) {
    var this_0 = this.money$delegate_1;
    money$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(GameInstance).get_money_ivc80n_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.money$delegate_1;
    money$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(GameInstance).get_requiredScore_g4q58q_k$ = function () {
    var tmp = EventBus_getInstance();
    // Inline function 'kotlin.math.pow' call
    var n = this.get_roundsPlayed_ljhy5d_k$();
    var tmp$ret$0 = Math.pow(1.7, n);
    return tmp.post_4asmox_k$(new RequiredScoreEvent(numberToInt(tmp$ret$0 * 20))).get_requiredScore_g4q58q_k$();
  };
  protoOf(GameInstance).get_runInfo_qw73lc_k$ = function () {
    return EventBus_getInstance().post_4asmox_k$(new RunInfoEvent(5, 2));
  };
  protoOf(GameInstance).set_currentScreen_jat478_k$ = function (_set____db54di) {
    var this_0 = this.currentScreen$delegate_1;
    currentScreen$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(GameInstance).get_currentScreen_zelgpw_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.currentScreen$delegate_1;
    currentScreen$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(GameInstance).moveModifier_8985d8_k$ = function (modifier, direction) {
    if (this.get_modifiers_mxb6zx_k$().isEmpty_y1axqb_k$())
      return Unit_getInstance();
    var index = this.get_modifiers_mxb6zx_k$().indexOf_si1fv9_k$(modifier);
    var size = this.get_modifiers_mxb6zx_k$().get_size_woubt6_k$();
    var newIndex = ((index + direction | 0) + size | 0) % size | 0;
    var itemAt = this.get_modifiers_mxb6zx_k$().get_c1px32_k$(newIndex);
    // Inline function 'kotlin.also' call
    var this_0 = toMutableList_0(this.get_modifiers_mxb6zx_k$());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.minutiae.game.GameInstance.moveModifier.<anonymous>' call
    this_0.set_82063s_k$(index, itemAt);
    this_0.set_82063s_k$(newIndex, modifier);
    _set_modifiers__v4q053(this, this_0);
  };
  protoOf(GameInstance).buyModifier_5hy493_k$ = function (modifier) {
    if (this.get_money_ivc80n_k$() < modifier.get_value_j01efc_k$())
      return false;
    if (this.get_modifiers_mxb6zx_k$().get_size_woubt6_k$() === 5)
      return false;
    _set_modifiers__v4q053(this, plus(this.get_modifiers_mxb6zx_k$(), modifier));
    this.set_money_m5avsr_k$(this.get_money_ivc80n_k$() - modifier.get_value_j01efc_k$() | 0);
    modifier.set_value_h293uc_k$(modifier.get_value_j01efc_k$() - 1 | 0);
    return true;
  };
  protoOf(GameInstance).removeModifier_ufqx6v_k$ = function (modifier) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = this.get_modifiers_mxb6zx_k$();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.minutiae.game.GameInstance.removeModifier.<anonymous>' call
      if (!(element === modifier)) {
        destination.add_utx5q5_k$(element);
      }
    }
    _set_modifiers__v4q053(this, destination);
  };
  protoOf(GameInstance).sellModifier_ottafp_k$ = function (modifier) {
    var value = modifier.get_value_j01efc_k$();
    this.set_money_m5avsr_k$(this.get_money_ivc80n_k$() + value | 0);
    this.removeModifier_ufqx6v_k$(modifier);
  };
  protoOf(GameInstance).startRound_h61h18_k$ = function () {
    this.set_currentScreen_jat478_k$(newRound(this));
  };
  protoOf(GameInstance).openShop_1cmd0w_k$ = function () {
    this.set_currentScreen_jat478_k$(new ShopInstance(Default_getInstance()));
  };
  protoOf(GameInstance).render_dje1iy_k$ = function () {
    illegalDecoyCallException('render');
  };
  protoOf(GameInstance).render$composable_ymlqsu_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1024857478);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1024857478, $dirty, -1, 'com.minutiae.game.GameInstance.render$composable (GameInstance.kt:89)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(1781110249);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>' call
        var value = GameInstance$render$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1059780326, true, GameInstance$render$composable$lambda_0(this));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.GameInstance.render$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(GameInstance$render$composable$lambda_1(this, $changed));
    }
  };
  function modifiers$factory() {
    return getPropertyCallableRef('modifiers', 1, KMutableProperty1, function (receiver) {
      return receiver.get_modifiers_mxb6zx_k$();
    }, function (receiver, value) {
      return _set_modifiers__v4q053(receiver, value);
    });
  }
  function modifiers$factory_0() {
    return getPropertyCallableRef('modifiers', 1, KMutableProperty1, function (receiver) {
      return receiver.get_modifiers_mxb6zx_k$();
    }, function (receiver, value) {
      return _set_modifiers__v4q053(receiver, value);
    });
  }
  function roundsPlayed$factory() {
    return getPropertyCallableRef('roundsPlayed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_roundsPlayed_ljhy5d_k$();
    }, function (receiver, value) {
      return receiver.set_roundsPlayed_a9kl77_k$(value);
    });
  }
  function roundsPlayed$factory_0() {
    return getPropertyCallableRef('roundsPlayed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_roundsPlayed_ljhy5d_k$();
    }, function (receiver, value) {
      return receiver.set_roundsPlayed_a9kl77_k$(value);
    });
  }
  function money$factory() {
    return getPropertyCallableRef('money', 1, KMutableProperty1, function (receiver) {
      return receiver.get_money_ivc80n_k$();
    }, function (receiver, value) {
      return receiver.set_money_m5avsr_k$(value);
    });
  }
  function money$factory_0() {
    return getPropertyCallableRef('money', 1, KMutableProperty1, function (receiver) {
      return receiver.get_money_ivc80n_k$();
    }, function (receiver, value) {
      return receiver.set_money_m5avsr_k$(value);
    });
  }
  function currentScreen$factory() {
    return getPropertyCallableRef('currentScreen', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentScreen_zelgpw_k$();
    }, function (receiver, value) {
      return receiver.set_currentScreen_jat478_k$(value);
    });
  }
  function currentScreen$factory_0() {
    return getPropertyCallableRef('currentScreen', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentScreen_zelgpw_k$();
    }, function (receiver, value) {
      return receiver.set_currentScreen_jat478_k$(value);
    });
  }
  function get_$stableprop_3() {
    return 0;
  }
  function GameOver$render$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_gameOverContainer_4l2q26_k$()]);
    return Unit_getInstance();
  }
  function GameOver$render$composable$lambda_0($tmp1_rcvr, $instance, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.render$composable_jfftuf_k$($instance, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function GameOver() {
    this.$stable_1 = 0;
  }
  protoOf(GameOver).render_z5v4yz_k$ = function (instance) {
    illegalDecoyCallException('render');
  };
  protoOf(GameOver).render$composable_jfftuf_k$ = function (instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1800535031);
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1800535031, $changed, -1, 'com.minutiae.game.GameOver.render$composable (GameOver.kt:8)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(1907485116);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.GameOver.render$composable.<anonymous>' call
        var value = GameOver$render$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, ComposableSingletons$GameOverKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(GameOver$render$composable$lambda_0(this, instance, $changed));
    }
  };
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameOverKt$lambda_1$lambda_t8kxoa($this$StandardButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2032817631, $changed, -1, 'com.minutiae.game.ComposableSingletons$GameOverKt.lambda-1.<anonymous> (GameOver.kt:17)');
      }
      Text$composable('New Game', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameOverKt$lambda_2$lambda_cywn8n($this$StandardButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-721714872, $changed, -1, 'com.minutiae.game.ComposableSingletons$GameOverKt.lambda-2.<anonymous> (GameOver.kt:23)');
      }
      Text$composable('Main Menu', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameOverKt$lambda_3$lambda_fupttk($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-682153630, $changed, -1, 'com.minutiae.game.ComposableSingletons$GameOverKt.lambda-3.<anonymous> (GameOver.kt:11)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(1510197880);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ComposableSingletons$GameOverKt.lambda-3.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$GameOverKt$lambda_3$lambda$lambda_6pivyl;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      StyledText$composable('Game Over!', tmp0_group, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(1510197943);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ComposableSingletons$GameOverKt.lambda-3.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$GameOverKt$lambda_3$lambda$lambda_6pivyl_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      StandardButton$composable(tmp1_group, ComposableSingletons$GameOverKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(1510198103);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ComposableSingletons$GameOverKt.lambda-3.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$GameOverKt$lambda_3$lambda$lambda_6pivyl_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      StandardButton$composable(tmp2_group, ComposableSingletons$GameOverKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$GameOverKt$lambda_3$lambda$lambda_6pivyl($this$StyledText) {
    $this$StyledText.classes_ayghm2_k$([get_Styles().get_simpleText_r6j5vs_k$()]);
    return Unit_getInstance();
  }
  function ComposableSingletons$GameOverKt$lambda_3$lambda$lambda_6pivyl_0($this$StandardButton) {
    $this$StandardButton.onClick_q9cds6_k$(ComposableSingletons$GameOverKt$lambda_3$lambda$lambda$lambda_n9wixk);
    return Unit_getInstance();
  }
  function ComposableSingletons$GameOverKt$lambda_3$lambda$lambda$lambda_n9wixk(it) {
    newGame();
    return Unit_getInstance();
  }
  function ComposableSingletons$GameOverKt$lambda_3$lambda$lambda_6pivyl_1($this$StandardButton) {
    $this$StandardButton.onClick_q9cds6_k$(ComposableSingletons$GameOverKt$lambda_3$lambda$lambda$lambda_n9wixk_0);
    return Unit_getInstance();
  }
  function ComposableSingletons$GameOverKt$lambda_3$lambda$lambda$lambda_n9wixk_0(it) {
    clearGame();
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameOverKt$lambda_4$lambda_qcrr3d($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(148056705, $changed, -1, 'com.minutiae.game.ComposableSingletons$GameOverKt.lambda-4.<anonymous> (GameOver.kt:10)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(1004639179);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ComposableSingletons$GameOverKt.lambda-4.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$GameOverKt$lambda_4$lambda$lambda_i816gk;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, ComposableSingletons$GameOverKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$GameOverKt$lambda_4$lambda$lambda_i816gk($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_gameSummary_j1anth_k$()]);
    return Unit_getInstance();
  }
  function ComposableSingletons$GameOverKt() {
    ComposableSingletons$GameOverKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(2032817631, false, ComposableSingletons$GameOverKt$lambda_1$lambda_t8kxoa));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-721714872, false, ComposableSingletons$GameOverKt$lambda_2$lambda_cywn8n));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-682153630, false, ComposableSingletons$GameOverKt$lambda_3$lambda_fupttk));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(148056705, false, ComposableSingletons$GameOverKt$lambda_4$lambda_qcrr3d));
  }
  protoOf(ComposableSingletons$GameOverKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$GameOverKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$GameOverKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$GameOverKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  var ComposableSingletons$GameOverKt_instance;
  function ComposableSingletons$GameOverKt_getInstance() {
    if (ComposableSingletons$GameOverKt_instance == null)
      new ComposableSingletons$GameOverKt();
    return ComposableSingletons$GameOverKt_instance;
  }
  function set_gameInstance(_set____db54di) {
    _init_properties_Minutiae_kt__uk8uho();
    var this_0 = gameInstance$delegate;
    gameInstance$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function get_gameInstance() {
    _init_properties_Minutiae_kt__uk8uho();
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = gameInstance$delegate;
    gameInstance$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  var gameInstance$delegate;
  function get_TESTING() {
    return TESTING;
  }
  var TESTING;
  function clearGame() {
    _init_properties_Minutiae_kt__uk8uho();
    set_gameInstance(null);
  }
  function newGame() {
    _init_properties_Minutiae_kt__uk8uho();
    set_gameInstance(new GameInstance());
  }
  function Minutiae() {
    _init_properties_Minutiae_kt__uk8uho();
    illegalDecoyCallException('Minutiae');
  }
  function MainMenu() {
    _init_properties_Minutiae_kt__uk8uho();
    illegalDecoyCallException('MainMenu');
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_1$lambda_3r6vu8($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(591794594, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-1.<anonymous> (Minutiae.kt:25)');
      }
      var tmp0_safe_receiver = get_gameInstance();
      $composer_0.startReplaceableGroup_ip860b_k$(731508268);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.render$composable_ymlqsu_k$($composer_0, 0);
        tmp = Unit_getInstance();
      }
      var tmp0_group = tmp;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      if (tmp0_group == null) {
        MainMenu$composable($composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_2$lambda_p2fl7z($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-616380604, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-2.<anonymous> (Minutiae.kt:32)');
      }
      Text$composable('Welcome to the demo!', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_3$lambda_h51zoy($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2025649989, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-3.<anonymous> (Minutiae.kt:33)');
      }
      Text$composable("During the game, you will be given random trivia questions. Each round requires more points than the last, so you'll have to buy modifiers in the shop between rounds to improve your chances of continuing. Starting out, you'll have up to 5 questions to score the required points. You will also be given 2 skips, if you need them.", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_4$lambda_bokhd9($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1750025020, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-4.<anonymous> (Minutiae.kt:34)');
      }
      Text$composable("For each question, you will be given two options to pick from. The first will always be an Easy question, while the second option can be any difficulty (Easy, Medium, or Hard). Clicking the Reveal button below one of the questions will activate it, leaving the other one locked. Once activated, you will have a limited time to answer the question, so it's recommended to read through the questions before clicking Reveal.", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_5$lambda_uix3jo($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1230732733, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-5.<anonymous> (Minutiae.kt:35)');
      }
      Text$composable('There are 3 values to be aware of when questions are scored. The blue value is the amount of time taken to answer the question. This has a maximum of 5 (before modifiers); questions that have longer answers will allow more time to answer, so you might have to keep an eye on the blue value because once it starts going down, you only have a few seconds left to answer.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_6$lambda_1pamhh($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(711440446, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-6.<anonymous> (Minutiae.kt:36)');
      }
      Text$composable('The red value is the number of guesses remaining. This starts at 3, and will go down each time you guess an answer incorrectly. If you guess incorrectly 3 times, you will get no points and be moved to the next question.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_7$lambda_r4bukq($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(192148159, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-7.<anonymous> (Minutiae.kt:37)');
      }
      Text$composable('The green value is the difficulty of the question. This value will be 1, 2, or 3 for Easy, Medium, or Hard questions, respectively. Once a correct answer is given, the three numbers are multiplied and added to your total score for the round.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_8$lambda_f35qc7($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-327144128, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-8.<anonymous> (Minutiae.kt:38)');
      }
      Text$composable("At the end of the round, you will be rewarded with some money depending on how many questions and skips you have left. You'll be given $1 for each unused question, and $1 for every 2 skips (rounded down).", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_9$lambda_dqgqq0($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-846436415, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-9.<anonymous> (Minutiae.kt:39)');
      }
      Text$composable("After winning a round, you will be taken to the shop, where you can buy modifiers. Modifiers can give more points, make certain categories of questions more common, or anything else, really. They cost money, so you'll need to have enough to be able to afford them, and they are random every time you visit the shop.", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_10$lambda_u2fs3a($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1365728702, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-10.<anonymous> (Minutiae.kt:40)');
      }
      Text$composable("As a reminder, this is just a proof of concept meant to show what the game would be about if it is made into a full game. It isn't graphically pleasing, and there is no end goal yet. It is just meant to demonstrate the core concepts of the game. To get started, click the New Game button below.", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_11$lambda_c51stn($this$StandardButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(265045065, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-11.<anonymous> (Minutiae.kt:44)');
      }
      Text$composable('New Game', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_12$lambda_goko8k($this$StandardButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1084139392, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-12.<anonymous> (Minutiae.kt:50)');
      }
      Text$composable('Change Theme', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MinutiaeKt$lambda_13$lambda_piwwod($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2135823194, $changed, -1, 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-13.<anonymous> (Minutiae.kt:32)');
      }
      P$composable(null, ComposableSingletons$MinutiaeKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$MinutiaeKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$MinutiaeKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$MinutiaeKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$MinutiaeKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$MinutiaeKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$MinutiaeKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$MinutiaeKt_getInstance().lambda_9_r8sbbh_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$MinutiaeKt_getInstance().lambda_10_7sywo5__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1713337274);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-13.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$MinutiaeKt$lambda_13$lambda$lambda_pjzll4;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      StandardButton$composable(tmp0_group, ComposableSingletons$MinutiaeKt_getInstance().lambda_11_7sywo6__1, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-1713337162);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ComposableSingletons$MinutiaeKt.lambda-13.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$MinutiaeKt$lambda_13$lambda$lambda_pjzll4_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      StandardButton$composable(tmp1_group, ComposableSingletons$MinutiaeKt_getInstance().lambda_12_7sywo7__1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MinutiaeKt$lambda_13$lambda$lambda_pjzll4($this$StandardButton) {
    $this$StandardButton.onClick_q9cds6_k$(ComposableSingletons$MinutiaeKt$lambda_13$lambda$lambda$lambda_huhzbh);
    return Unit_getInstance();
  }
  function ComposableSingletons$MinutiaeKt$lambda_13$lambda$lambda$lambda_huhzbh(it) {
    newGame();
    return Unit_getInstance();
  }
  function ComposableSingletons$MinutiaeKt$lambda_13$lambda$lambda_pjzll4_0($this$StandardButton) {
    $this$StandardButton.onClick_q9cds6_k$(ComposableSingletons$MinutiaeKt$lambda_13$lambda$lambda$lambda_huhzbh_0);
    return Unit_getInstance();
  }
  function ComposableSingletons$MinutiaeKt$lambda_13$lambda$lambda$lambda_huhzbh_0(it) {
    cycleTheme();
    return Unit_getInstance();
  }
  function ComposableSingletons$MinutiaeKt() {
    ComposableSingletons$MinutiaeKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(591794594, false, ComposableSingletons$MinutiaeKt$lambda_1$lambda_3r6vu8));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-616380604, false, ComposableSingletons$MinutiaeKt$lambda_2$lambda_p2fl7z));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-2025649989, false, ComposableSingletons$MinutiaeKt$lambda_3$lambda_h51zoy));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1750025020, false, ComposableSingletons$MinutiaeKt$lambda_4$lambda_bokhd9));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(1230732733, false, ComposableSingletons$MinutiaeKt$lambda_5$lambda_uix3jo));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(711440446, false, ComposableSingletons$MinutiaeKt$lambda_6$lambda_1pamhh));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(192148159, false, ComposableSingletons$MinutiaeKt$lambda_7$lambda_r4bukq));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-327144128, false, ComposableSingletons$MinutiaeKt$lambda_8$lambda_f35qc7));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-846436415, false, ComposableSingletons$MinutiaeKt$lambda_9$lambda_dqgqq0));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-1365728702, false, ComposableSingletons$MinutiaeKt$lambda_10$lambda_u2fs3a));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(265045065, false, ComposableSingletons$MinutiaeKt$lambda_11$lambda_c51stn));
    var tmp_10 = this;
    tmp_10.lambda_12_7sywo7__1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-1084139392, false, ComposableSingletons$MinutiaeKt$lambda_12$lambda_goko8k));
    var tmp_11 = this;
    tmp_11.lambda_13_7sywo8__1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-2135823194, false, ComposableSingletons$MinutiaeKt$lambda_13$lambda_piwwod));
  }
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_7_bzdzzu_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_8_bzdzzv_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_9_bzdzzw_k$ = function () {
    return this.lambda_9_r8sbbh_1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_10_gbhpvg_k$ = function () {
    return this.lambda_10_7sywo5__1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_11_gbhpvh_k$ = function () {
    return this.lambda_11_7sywo6__1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_12_gbhpvi_k$ = function () {
    return this.lambda_12_7sywo7__1;
  };
  protoOf(ComposableSingletons$MinutiaeKt).get_lambda_13_gbhpvj_k$ = function () {
    return this.lambda_13_7sywo8__1;
  };
  var ComposableSingletons$MinutiaeKt_instance;
  function ComposableSingletons$MinutiaeKt_getInstance() {
    if (ComposableSingletons$MinutiaeKt_instance == null)
      new ComposableSingletons$MinutiaeKt();
    return ComposableSingletons$MinutiaeKt_instance;
  }
  function Minutiae$composable($composer, $changed) {
    _init_properties_Minutiae_kt__uk8uho();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-384820973);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-384820973, $changed, -1, 'com.minutiae.game.Minutiae$composable (Minutiae.kt:22)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var styleSheet = get_Styles();
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-168645675);
      sourceInformation($composer_1, 'CC(Style$composable)');
      Style$composable(null, styleSheet.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      $composer_0.startReplaceableGroup_ip860b_k$(-510856434);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.Minutiae$composable.<anonymous>' call
        var value = Minutiae$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, ComposableSingletons$MinutiaeKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Minutiae$composable$lambda_0($changed));
    }
  }
  function MainMenu$composable($composer, $changed) {
    _init_properties_Minutiae_kt__uk8uho();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-223838065);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-223838065, $changed, -1, 'com.minutiae.game.MainMenu$composable (Minutiae.kt:30)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(76060682);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.MainMenu$composable.<anonymous>' call
        var value = MainMenu$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, ComposableSingletons$MinutiaeKt_getInstance().lambda_13_7sywo8__1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(MainMenu$composable$lambda_0($changed));
    }
  }
  function Minutiae$composable$lambda($this$Div) {
    _init_properties_Minutiae_kt__uk8uho();
    $this$Div.classes_ayghm2_k$([get_Styles().get_pageContainer_6vr6uv_k$()]);
    return Unit_getInstance();
  }
  function Minutiae$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      Minutiae$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MainMenu$composable$lambda($this$Div) {
    _init_properties_Minutiae_kt__uk8uho();
    $this$Div.classes_ayghm2_k$([get_Styles().get_mainMenu_vy33i7_k$()]);
    return Unit_getInstance();
  }
  function MainMenu$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      MainMenu$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function gameInstance$factory() {
    return getPropertyCallableRef('gameInstance', 0, KMutableProperty0, function () {
      return get_gameInstance();
    }, function (value) {
      return set_gameInstance(value);
    });
  }
  function gameInstance$factory_0() {
    return getPropertyCallableRef('gameInstance', 0, KMutableProperty0, function () {
      return get_gameInstance();
    }, function (value) {
      return set_gameInstance(value);
    });
  }
  var properties_initialized_Minutiae_kt_w443jy;
  function _init_properties_Minutiae_kt__uk8uho() {
    if (!properties_initialized_Minutiae_kt_w443jy) {
      properties_initialized_Minutiae_kt_w443jy = true;
      gameInstance$delegate = mutableStateOf(null);
    }
  }
  function PlayScreen() {
  }
  function _get_answers__qwcim4($this) {
    return $this.answers_1;
  }
  function _set_started__bivodg($this, _set____db54di) {
    var this_0 = $this.started$delegate_1;
    started$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_timeRemaining__j8clvg($this, _set____db54di) {
    var this_0 = $this.timeRemaining$delegate_1;
    timeRemaining$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_timeRemaining__40l3d4($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.timeRemaining$delegate_1;
    timeRemaining$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function _set_guessesRemaining__t7t67u($this, _set____db54di) {
    var this_0 = $this.guessesRemaining$delegate_1;
    guessesRemaining$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_score__bi2ydd($this) {
    return EventBus_getInstance().post_4asmox_k$(new ScoreQuestionEvent($this, $this.get_maxTime_f845t4_k$(), $this.get_guessesRemaining_1z3uka_k$(), $this.difficultyMultiplier_1)).get_score_iyfcrt_k$();
  }
  function RenderSelected($this, instance) {
    illegalDecoyCallException('RenderSelected');
  }
  function RenderHidden($this) {
    illegalDecoyCallException('RenderHidden');
  }
  function QuestionBlock($this) {
    illegalDecoyCallException('QuestionBlock');
  }
  function get_$stableprop_4() {
    return 0;
  }
  function RenderSelected$composable($this, instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1301361155);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(instance) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1301361155, $dirty, -1, 'com.minutiae.game.QuestionInstance.RenderSelected$composable (QuestionInstance.kt:67)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-470454508);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.QuestionInstance.RenderSelected$composable.<anonymous>' call
        var value = QuestionInstance$RenderSelected$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.QuestionInstance.RenderSelected$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1787872818, true, QuestionInstance$RenderSelected$composable$lambda_0($this, instance));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.QuestionInstance.RenderSelected$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(QuestionInstance$RenderSelected$composable$lambda_1($this, instance, $changed));
    }
  }
  function RenderHidden$composable($this, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(482974076);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(482974076, $dirty, -1, 'com.minutiae.game.QuestionInstance.RenderHidden$composable (QuestionInstance.kt:79)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1816911489);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.QuestionInstance.RenderHidden$composable.<anonymous>' call
        var value = QuestionInstance$RenderHidden$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.QuestionInstance.RenderHidden$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -480547544, true, QuestionInstance$RenderHidden$composable$lambda_0($this));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.QuestionInstance.RenderHidden$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_26(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(QuestionInstance$RenderHidden$composable$lambda_1($this, $changed));
    }
  }
  function QuestionBlock$composable($this, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-589366869);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-589366869, $dirty, -1, 'com.minutiae.game.QuestionInstance.QuestionBlock$composable (QuestionInstance.kt:95)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(1921420915);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>' call
        var value = QuestionInstance$QuestionBlock$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 78297297, true, QuestionInstance$QuestionBlock$composable$lambda_0($this));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_29(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(QuestionInstance$QuestionBlock$composable$lambda_1($this, $changed));
    }
  }
  function QuestionInstance$render$composable$lambda($tmp0_rcvr, $instance, $showButton, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.render$composable_o66aec_k$($instance, $showButton, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function QuestionInstance$RenderSelected$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_question_jy1o6n_k$(), get_Styles().get_questionRevealed_qdzny3_k$()]);
    return Unit_getInstance();
  }
  function QuestionInstance$RenderSelected$composable$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_answersContainer_ejqwd1_k$()]);
    return Unit_getInstance();
  }
  function QuestionInstance$RenderSelected$composable$lambda$lambda_0(this$0, $instance) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1158778349, $changed, -1, 'com.minutiae.game.QuestionInstance.RenderSelected$composable.<anonymous>.<anonymous> (QuestionInstance.kt:70)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this$0.answers_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.minutiae.game.QuestionInstance.RenderSelected$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          element.render$composable_5ih57c_k$(this$0, $instance, $composer_0, 0);
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function QuestionInstance$RenderSelected$composable$lambda_0(this$0, $instance) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1787872818, $changed, -1, 'com.minutiae.game.QuestionInstance.RenderSelected$composable.<anonymous> (QuestionInstance.kt:69)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-205555842);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.QuestionInstance.RenderSelected$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = QuestionInstance$RenderSelected$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.QuestionInstance.RenderSelected$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1158778349, true, QuestionInstance$RenderSelected$composable$lambda$lambda_0(this$0, $instance));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.QuestionInstance.RenderSelected$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_24(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
        QuestionBlock$composable(this$0, $composer_0, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function QuestionInstance$RenderSelected$composable$lambda_1($tmp1_rcvr, $instance, $$changed) {
    return function ($composer, $force) {
      RenderSelected$composable($tmp1_rcvr, $instance, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function QuestionInstance$RenderHidden$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_question_jy1o6n_k$(), get_Styles().get_questionHidden_8pxivb_k$()]);
    return Unit_getInstance();
  }
  function QuestionInstance$RenderHidden$composable$lambda$lambda$lambda(this$0) {
    return function (it) {
      _set_started__bivodg(this$0, true);
      var tmp0_this = this$0.roundInstance_1;
      var tmp1 = tmp0_this.get_questionsRemaining_ihyvua_k$();
      tmp0_this.set_questionsRemaining_2fg3mm_k$(tmp1 - 1 | 0);
      return Unit_getInstance();
    };
  }
  function QuestionInstance$RenderHidden$composable$lambda$lambda(this$0) {
    return function ($this$StandardButton) {
      $this$StandardButton.onClick_q9cds6_k$(QuestionInstance$RenderHidden$composable$lambda$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function QuestionInstance$RenderHidden$composable$lambda_0(this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-480547544, $changed, -1, 'com.minutiae.game.QuestionInstance.RenderHidden$composable.<anonymous> (QuestionInstance.kt:81)');
        }
        QuestionBlock$composable(this$0, $composer_0, 0);
        StandardButton$composable(QuestionInstance$RenderHidden$composable$lambda$lambda(this$0), ComposableSingletons$QuestionInstanceKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function QuestionInstance$RenderHidden$composable$lambda_1($tmp1_rcvr, $$changed) {
    return function ($composer, $force) {
      RenderHidden$composable($tmp1_rcvr, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function QuestionInstance$QuestionBlock$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_questionCategoryAndText_xn1nu1_k$()]);
    return Unit_getInstance();
  }
  function QuestionInstance$QuestionBlock$composable$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_secondaryComponent_ijmg7i_k$()]);
    return Unit_getInstance();
  }
  function QuestionInstance$QuestionBlock$composable$lambda$lambda_0(this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(461263696, $changed, -1, 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>.<anonymous> (QuestionInstance.kt:98)');
        }
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$run = this$0.question_1;
        SimpleText$composable($this$run.get_category_uyv41l_k$().get_displayName_sscnb0_k$() + ' [' + $this$run.get_difficulty_a2zhac_k$().get_displayName_sscnb0_k$() + ']', $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function QuestionInstance$QuestionBlock$composable$lambda$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_secondaryComponent_ijmg7i_k$()]);
    return Unit_getInstance();
  }
  function QuestionInstance$QuestionBlock$composable$lambda$lambda_2(this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1354551033, $changed, -1, 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>.<anonymous> (QuestionInstance.kt:104)');
        }
        SimpleText$composable(this$0.question_1.get_text_wouvsm_k$(), $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function QuestionInstance$QuestionBlock$composable$lambda_0(this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(78297297, $changed, -1, 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous> (QuestionInstance.kt:97)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-368850477);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = QuestionInstance$QuestionBlock$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 461263696, true, QuestionInstance$QuestionBlock$composable$lambda$lambda_0(this$0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_27(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(-368850269);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = QuestionInstance$QuestionBlock$composable$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -1354551033, true, QuestionInstance$QuestionBlock$composable$lambda$lambda_2(this$0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.QuestionInstance.QuestionBlock$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_28(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp1_group, tmp0_0, $composer_0, 54, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function QuestionInstance$QuestionBlock$composable$lambda_1($tmp1_rcvr, $$changed) {
    return function ($composer, $force) {
      QuestionBlock$composable($tmp1_rcvr, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function QuestionInstance(roundInstance, question) {
    this.roundInstance_1 = roundInstance;
    this.question_1 = question;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.question_1.getAnswers_9huh4u_k$(Default_getInstance());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0 = new AnswerInstance(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.answers_1 = destination;
    this.started$delegate_1 = mutableStateOf(false);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var tmp0_iterator_0 = this.answers_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      var tmp_1 = sum;
      // Inline function 'com.minutiae.game.QuestionInstance.timeRemaining$delegate.<anonymous>' call
      sum = tmp_1 + split(element.get_text_wouvsm_k$(), [' ']).get_size_woubt6_k$() | 0;
    }
    var a = sum / 4 | 0;
    var tmp$ret$5 = Math.max(a, 5);
    tmp_0.timeRemaining$delegate_1 = mutableStateOf(tmp$ret$5 + 2 | 0);
    this.guessesRemaining$delegate_1 = mutableStateOf(this.question_1.get_incorrectAnswers_42udd3_k$().get_size_woubt6_k$());
    this.difficultyMultiplier_1 = this.question_1.get_difficulty_a2zhac_k$().get_multiplier_qxufe_k$();
    this.$stable_1 = 0;
  }
  protoOf(QuestionInstance).get_roundInstance_rtem7a_k$ = function () {
    return this.roundInstance_1;
  };
  protoOf(QuestionInstance).get_question_jy1o6n_k$ = function () {
    return this.question_1;
  };
  protoOf(QuestionInstance).get_started_u3zbe0_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.started$delegate_1;
    started$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(QuestionInstance).get_guessesRemaining_1z3uka_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.guessesRemaining$delegate_1;
    guessesRemaining$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(QuestionInstance).get_difficultyMultiplier_nh0gmd_k$ = function () {
    return this.difficultyMultiplier_1;
  };
  protoOf(QuestionInstance).onGuess_unexvi_k$ = function (correct, instance) {
    if (correct) {
      this.roundInstance_1.onCorrectAnswer_64v4yk_k$(_get_score__bi2ydd(this), instance);
    } else {
      var tmp1 = this.get_guessesRemaining_1z3uka_k$();
      _set_guessesRemaining__t7t67u(this, tmp1 - 1 | 0);
      if (this.get_guessesRemaining_1z3uka_k$() === 0) {
        this.roundInstance_1.onWrongAnswer_sqh8ht_k$(instance);
      }
    }
  };
  protoOf(QuestionInstance).get_maxTime_f845t4_k$ = function () {
    // Inline function 'kotlin.math.min' call
    var a = _get_timeRemaining__40l3d4(this);
    return Math.min(a, 5);
  };
  protoOf(QuestionInstance).render_b7rblm_k$ = function (instance, showButton) {
    illegalDecoyCallException('render');
  };
  protoOf(QuestionInstance).render$composable_o66aec_k$ = function (instance, showButton, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-182835030);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(instance) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(showButton) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-182835030, $dirty, -1, 'com.minutiae.game.QuestionInstance.render$composable (QuestionInstance.kt:48)');
      }
      this.get_started_u3zbe0_k$();
      if (showButton) {
        $composer_0.startReplaceableGroup_ip860b_k$(-1446654464);
        RenderHidden$composable(this, $composer_0, 14 & $dirty >> 6);
        $composer_0.endReplaceableGroup_ern0ak_k$();
      } else {
        $composer_0.startReplaceableGroup_ip860b_k$(-1446654420);
        RenderSelected$composable(this, instance, $composer_0, 14 & $dirty | 112 & $dirty >> 3);
        $composer_0.endReplaceableGroup_ern0ak_k$();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(QuestionInstance$render$composable$lambda(this, instance, showButton, $changed));
    }
  };
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$QuestionInstanceKt$lambda_1$lambda_hpcbv5($this$StandardButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(778738341, $changed, -1, 'com.minutiae.game.ComposableSingletons$QuestionInstanceKt.lambda-1.<anonymous> (QuestionInstance.kt:89)');
      }
      Text$composable('Reveal!', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$QuestionInstanceKt() {
    ComposableSingletons$QuestionInstanceKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(778738341, false, ComposableSingletons$QuestionInstanceKt$lambda_1$lambda_hpcbv5));
  }
  protoOf(ComposableSingletons$QuestionInstanceKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$QuestionInstanceKt_instance;
  function ComposableSingletons$QuestionInstanceKt_getInstance() {
    if (ComposableSingletons$QuestionInstanceKt_instance == null)
      new ComposableSingletons$QuestionInstanceKt();
    return ComposableSingletons$QuestionInstanceKt_instance;
  }
  function started$factory() {
    return getPropertyCallableRef('started', 1, KMutableProperty1, function (receiver) {
      return receiver.get_started_u3zbe0_k$();
    }, function (receiver, value) {
      return _set_started__bivodg(receiver, value);
    });
  }
  function started$factory_0() {
    return getPropertyCallableRef('started', 1, KMutableProperty1, function (receiver) {
      return receiver.get_started_u3zbe0_k$();
    }, function (receiver, value) {
      return _set_started__bivodg(receiver, value);
    });
  }
  function timeRemaining$factory() {
    return getPropertyCallableRef('timeRemaining', 1, KMutableProperty1, function (receiver) {
      return _get_timeRemaining__40l3d4(receiver);
    }, function (receiver, value) {
      return _set_timeRemaining__j8clvg(receiver, value);
    });
  }
  function timeRemaining$factory_0() {
    return getPropertyCallableRef('timeRemaining', 1, KMutableProperty1, function (receiver) {
      return _get_timeRemaining__40l3d4(receiver);
    }, function (receiver, value) {
      return _set_timeRemaining__j8clvg(receiver, value);
    });
  }
  function guessesRemaining$factory() {
    return getPropertyCallableRef('guessesRemaining', 1, KMutableProperty1, function (receiver) {
      return receiver.get_guessesRemaining_1z3uka_k$();
    }, function (receiver, value) {
      return _set_guessesRemaining__t7t67u(receiver, value);
    });
  }
  function guessesRemaining$factory_0() {
    return getPropertyCallableRef('guessesRemaining', 1, KMutableProperty1, function (receiver) {
      return receiver.get_guessesRemaining_1z3uka_k$();
    }, function (receiver, value) {
      return _set_guessesRemaining__t7t67u(receiver, value);
    });
  }
  function _get_pools__cqmejq($this) {
    return $this.pools_1;
  }
  function checkQuestions($this, difficulty, category, $completion) {
    var tmp = new $checkQuestionsCOROUTINE$0($this, difficulty, category, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_$stableprop_5() {
    return 8;
  }
  function $checkQuestionsCOROUTINE$0(_this__u8e3s4, difficulty, category, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.difficulty_1 = difficulty;
    this.category_1 = category;
  }
  protoOf($checkQuestionsCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            var this_0 = this._this__u8e3s4__1.pools_1;
            var key = to(this.difficulty_1, this.category_1);
            var value = this_0.get_wei43m_k$(key);
            var tmp_1;
            if (value == null) {
              var answer = ArrayList_init_$Create$_0();
              this_0.put_4fpzoq_k$(key, answer);
              tmp_1 = answer;
            } else {
              tmp_1 = value;
            }

            tmp_0.questionPool0__1 = tmp_1;
            if (!this.questionPool0__1.isEmpty_y1axqb_k$())
              return Unit_getInstance();
            var tmp_2 = this;
            tmp_2.this1__1 = this.questionPool0__1;
            if (get_TESTING()) {
              var tmp_3 = this;
              var list = ArrayList_init_$Create$(10);
              var inductionVariable = 0;
              if (inductionVariable < 10)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  list.add_utx5q5_k$(new Question(this.category_1, 'ID', emptyList(), this.difficulty_1, emptyList(), false, new QuestionText('Question?'), 'Correct Answer', listOf_0(['Wrong', 'Nope', 'Sorry']), 'text'));
                }
                 while (inductionVariable < 10);
              tmp_3.WHEN_RESULT2__1 = list;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              var tmp_4 = TheTriviaAPI_getInstance();
              var tmp0_difficulties = listOf(this.difficulty_1);
              var tmp1_categories = listOf(this.category_1);
              suspendResult = tmp_4.getQuestions_gjwgnb_k$(new QuestionRequest(10, tmp1_categories, tmp0_difficulties), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT2__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var elements = this.WHEN_RESULT2__1;
            addAll(this.this1__1, elements);
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $getQuestionCOROUTINE$1(_this__u8e3s4, difficulty, category, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.difficulty_1 = difficulty;
    this.category_1 = category;
  }
  protoOf($getQuestionCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = checkQuestions(this._this__u8e3s4__1, this.difficulty_1, this.category_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return removeFirst(ensureNotNull(this._this__u8e3s4__1.pools_1.get_wei43m_k$(to(this.difficulty_1, this.category_1))));
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function QuestionPool() {
    QuestionPool_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.pools_1 = LinkedHashMap_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(QuestionPool).getQuestion_cefik3_k$ = function (difficulty, category, $completion) {
    var tmp = new $getQuestionCOROUTINE$1(this, difficulty, category, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  var QuestionPool_instance;
  function QuestionPool_getInstance() {
    if (QuestionPool_instance == null)
      new QuestionPool();
    return QuestionPool_instance;
  }
  function _get_random__h29cgo($this) {
    return $this.random_1;
  }
  function _set_currentQuestions__n1mtml($this, _set____db54di) {
    var this_0 = $this.currentQuestions$delegate_1;
    currentQuestions$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_currentQuestions__61hfg7($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.currentQuestions$delegate_1;
    currentQuestions$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function _set_totalScore__sk4p5j($this, _set____db54di) {
    var this_0 = $this.totalScore$delegate_1;
    totalScore$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_skipsRemaining__1pi1n9($this, _set____db54di) {
    var this_0 = $this.skipsRemaining$delegate_1;
    skipsRemaining$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function onSkip($this) {
    var tmp = EventBus_getInstance();
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_currentQuestions__61hfg7($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.minutiae.game.RoundInstance.onSkip.<anonymous>' call
      var tmp$ret$0 = item.get_question_jy1o6n_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.post_4asmox_k$(new SkipQuestionEvent(destination));
    var tmp1 = $this.get_skipsRemaining_n9cr63_k$();
    _set_skipsRemaining__1pi1n9($this, tmp1 - 1 | 0);
    updateQuestions($this);
  }
  function updateQuestions($this) {
    _set_currentQuestions__n1mtml($this, emptyList());
    var tmp = GlobalScope_getInstance();
    launch(tmp, VOID, VOID, RoundInstance$updateQuestions$slambda_0($this, null));
  }
  function getQuestionInstance($this, difficulty, category, $completion) {
    var tmp = new $getQuestionInstanceCOROUTINE$0($this, difficulty, category, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function cycleQuestions($this, instance) {
    if ($this.get_totalScore_w14a89_k$() >= $this.requiredScore_1) {
      var tmp1 = instance.get_roundsPlayed_ljhy5d_k$();
      instance.set_roundsPlayed_a9kl77_k$(tmp1 + 1 | 0);
      EventBus_getInstance().post_4asmox_k$(new RoundWinEvent($this.get_totalScore_w14a89_k$(), $this.get_questionsRemaining_ihyvua_k$(), $this.get_skipsRemaining_n9cr63_k$()));
      instance.set_currentScreen_jat478_k$(new RoundOver($this));
    } else if ($this.get_questionsRemaining_ihyvua_k$() === 0) {
      instance.set_currentScreen_jat478_k$(new GameOver());
    } else {
      updateQuestions($this);
    }
  }
  function getRandomCategory($this, random) {
    var tmp = EventBus_getInstance();
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.minutiae.game.RoundInstance.getRandomCategory.<anonymous>' call
      var tmp$ret$0 = new MutableWeighted(item, 5.0);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return tmp.post_4asmox_k$(new SelectCategoryEvent(destination)).getCategory_p4t1jd_k$(random);
  }
  function _get_selectedQuestion__5lpody($this) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = _get_currentQuestions__61hfg7($this);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.minutiae.game.RoundInstance.<get-selectedQuestion>.<anonymous>' call
        if (element.get_started_u3zbe0_k$()) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function Questions($this, instance) {
    illegalDecoyCallException('Questions');
  }
  function get_$stableprop_6() {
    return 0;
  }
  function Questions$composable($this, instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2045929829);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(instance) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2045929829, $dirty, -1, 'com.minutiae.game.RoundInstance.Questions$composable (RoundInstance.kt:129)');
      }
      var tmp0_safe_receiver = _get_selectedQuestion__5lpody($this);
      $composer_0.startReplaceableGroup_ip860b_k$(1431207390);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.render$composable_o66aec_k$(instance, false, $composer_0, 48 | 14 & $dirty);
        tmp = Unit_getInstance();
      }
      var tmp0_group = tmp;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      if (tmp0_group == null) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = _get_currentQuestions__61hfg7($this).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.minutiae.game.RoundInstance.Questions$composable.<anonymous>' call
          element.render$composable_o66aec_k$(instance, true, $composer_0, 48 | 14 & $dirty);
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(RoundInstance$Questions$composable$lambda($this, instance, $changed));
    }
  }
  function RoundInstance$updateQuestions$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RoundInstance$updateQuestions$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RoundInstance$updateQuestions$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RoundInstance$updateQuestions$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = getQuestionInstance(this.this$0__1, Difficulty_easy_getInstance(), getRandomCategory(this.this$0__1, this.this$0__1.random_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = getQuestionInstance(this.this$0__1, random(listOf_0([Difficulty_medium_getInstance(), Difficulty_hard_getInstance()]), this.this$0__1.random_1), getRandomCategory(this.this$0__1, this.this$0__1.random_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = [this.ARGUMENT0__1, ARGUMENT];
            var ARGUMENT_1 = listOf_0(ARGUMENT_0);
            _set_currentQuestions__n1mtml(this.this$0__1, ARGUMENT_1);
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RoundInstance$updateQuestions$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RoundInstance$updateQuestions$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RoundInstance$updateQuestions$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RoundInstance$updateQuestions$slambda_0(this$0, resultContinuation) {
    var i = new RoundInstance$updateQuestions$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RoundInstance$render$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_questionsPlayContainer_sk3o9j_k$()]);
    return Unit_getInstance();
  }
  function RoundInstance$render$composable$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_questionsContainer_2okzwj_k$()]);
    return Unit_getInstance();
  }
  function RoundInstance$render$composable$lambda$lambda_0(this$0, $instance) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(496974016, $changed, -1, 'com.minutiae.game.RoundInstance.render$composable.<anonymous>.<anonymous> (RoundInstance.kt:94)');
        }
        if (_get_currentQuestions__61hfg7(this$0).isEmpty_y1axqb_k$()) {
          $composer_0.startReplaceableGroup_ip860b_k$(1458972171);
          Loading$composable($composer_0, 0);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        } else {
          $composer_0.startReplaceableGroup_ip860b_k$(1458972226);
          Questions$composable(this$0, $instance, $composer_0, 0);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RoundInstance$render$composable$lambda$lambda$lambda(this$0) {
    return function (it) {
      onSkip(this$0);
      return Unit_getInstance();
    };
  }
  function RoundInstance$render$composable$lambda$lambda_1(this$0) {
    return function ($this$StandardButton) {
      var tmp;
      if (this$0.get_skipsRemaining_n9cr63_k$() === 0) {
        disabled($this$StandardButton);
        tmp = Unit_getInstance();
      }
      $this$StandardButton.onClick_q9cds6_k$(RoundInstance$render$composable$lambda$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function RoundInstance$render$composable$lambda_0(this$0, $instance) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1870684385, $changed, -1, 'com.minutiae.game.RoundInstance.render$composable.<anonymous> (RoundInstance.kt:93)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-2096881776);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RoundInstance.render$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = RoundInstance$render$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.RoundInstance.render$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 496974016, true, RoundInstance$render$composable$lambda$lambda_0(this$0, $instance));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RoundInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_31(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(-2096881529);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changed_ga7h3f_k$(this$0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RoundInstance.render$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = RoundInstance$render$composable$lambda$lambda_1(this$0);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StandardButton$composable(tmp1_group, ComposableSingletons$RoundInstanceKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RoundInstance$render$composable$lambda_1($tmp1_rcvr, $instance, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.render$composable_jfftuf_k$($instance, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RoundInstance$Questions$composable$lambda($tmp1_rcvr, $instance, $$changed) {
    return function ($composer, $force) {
      Questions$composable($tmp1_rcvr, $instance, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function $getQuestionInstanceCOROUTINE$0(_this__u8e3s4, difficulty, category, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.difficulty_1 = difficulty;
    this.category_1 = category;
  }
  protoOf($getQuestionInstanceCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = QuestionPool_getInstance().getQuestion_cefik3_k$(this.difficulty_1, this.category_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new QuestionInstance(this._this__u8e3s4__1, ARGUMENT);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function RoundInstance(requiredScore, questions, skips, random) {
    this.requiredScore_1 = requiredScore;
    this.questions_1 = questions;
    this.skips_1 = skips;
    this.random_1 = random;
    this.currentQuestions$delegate_1 = mutableStateOf(emptyList());
    this.totalScore$delegate_1 = mutableStateOf(0);
    this.skipsRemaining$delegate_1 = mutableStateOf(this.skips_1);
    this.questionsRemaining$delegate_1 = mutableStateOf(this.questions_1);
    this.$stable_1 = 0;
  }
  protoOf(RoundInstance).get_requiredScore_g4q58q_k$ = function () {
    return this.requiredScore_1;
  };
  protoOf(RoundInstance).get_questions_kyknz0_k$ = function () {
    return this.questions_1;
  };
  protoOf(RoundInstance).get_skips_iykc6j_k$ = function () {
    return this.skips_1;
  };
  protoOf(RoundInstance).get_totalScore_w14a89_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.totalScore$delegate_1;
    totalScore$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(RoundInstance).get_skipsRemaining_n9cr63_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.skipsRemaining$delegate_1;
    skipsRemaining$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(RoundInstance).set_questionsRemaining_2fg3mm_k$ = function (_set____db54di) {
    var this_0 = this.questionsRemaining$delegate_1;
    questionsRemaining$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(RoundInstance).get_questionsRemaining_ihyvua_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.questionsRemaining$delegate_1;
    questionsRemaining$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(RoundInstance).onCorrectAnswer_64v4yk_k$ = function (score, instance) {
    _set_totalScore__sk4p5j(this, this.get_totalScore_w14a89_k$() + score | 0);
    cycleQuestions(this, instance);
  };
  protoOf(RoundInstance).onWrongAnswer_sqh8ht_k$ = function (instance) {
    cycleQuestions(this, instance);
  };
  protoOf(RoundInstance).render_z5v4yz_k$ = function (instance) {
    illegalDecoyCallException('render');
  };
  protoOf(RoundInstance).renderSideBar_oem711_k$ = function (instance) {
    illegalDecoyCallException('renderSideBar');
  };
  protoOf(RoundInstance).render$composable_jfftuf_k$ = function (instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1677209848);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(instance) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1677209848, $dirty, -1, 'com.minutiae.game.RoundInstance.render$composable (RoundInstance.kt:89)');
      }
      updateQuestions(this);
      $composer_0.startReplaceableGroup_ip860b_k$(1909108657);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RoundInstance.render$composable.<anonymous>' call
        var value = RoundInstance$render$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.RoundInstance.render$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1870684385, true, RoundInstance$render$composable$lambda_0(this, instance));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RoundInstance.render$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_32(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(RoundInstance$render$composable$lambda_1(this, instance, $changed));
    }
  };
  protoOf(RoundInstance).renderSideBar$composable_ixdoa1_k$ = function (instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1974361848);
    if (isTraceInProgress()) {
      traceEventStart(1974361848, $changed, -1, 'com.minutiae.game.RoundInstance.renderSideBar$composable (RoundInstance.kt:113)');
    }
    var tmp = this.get_questionsRemaining_ihyvua_k$();
    var tmp_0 = this.get_skipsRemaining_n9cr63_k$();
    var tmp_1 = instance.get_roundsPlayed_ljhy5d_k$();
    var tmp_2 = instance.get_money_ivc80n_k$();
    var tmp0_safe_receiver = _get_selectedQuestion__5lpody(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_maxTime_f845t4_k$();
    var tmp_3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = _get_selectedQuestion__5lpody(this);
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_guessesRemaining_1z3uka_k$();
    var tmp_4 = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = _get_selectedQuestion__5lpody(this);
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_difficultyMultiplier_nh0gmd_k$();
    Sidebar$composable(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, this.requiredScore_1, this.get_totalScore_w14a89_k$(), $composer_0, 0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return true;
  };
  function Loading() {
    illegalDecoyCallException('Loading');
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RoundInstanceKt$lambda_1$lambda_46028p($this$StandardButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-611398500, $changed, -1, 'com.minutiae.game.ComposableSingletons$RoundInstanceKt.lambda-1.<anonymous> (RoundInstance.kt:105)');
      }
      Text$composable('Skip!', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RoundInstanceKt$lambda_2$lambda_wzmjaw($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1698668431, $changed, -1, 'com.minutiae.game.ComposableSingletons$RoundInstanceKt.lambda-2.<anonymous> (RoundInstance.kt:138)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1881654290);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ComposableSingletons$RoundInstanceKt.lambda-2.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$RoundInstanceKt$lambda_2$lambda$lambda_iwv58t;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      StyledInlineText$composable('Loading Questions . . .', tmp0_group, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RoundInstanceKt$lambda_2$lambda$lambda_iwv58t($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_loadingLabel_rlde1t_k$()]);
    return Unit_getInstance();
  }
  function ComposableSingletons$RoundInstanceKt() {
    ComposableSingletons$RoundInstanceKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-611398500, false, ComposableSingletons$RoundInstanceKt$lambda_1$lambda_46028p));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(1698668431, false, ComposableSingletons$RoundInstanceKt$lambda_2$lambda_wzmjaw));
  }
  protoOf(ComposableSingletons$RoundInstanceKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$RoundInstanceKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$RoundInstanceKt_instance;
  function ComposableSingletons$RoundInstanceKt_getInstance() {
    if (ComposableSingletons$RoundInstanceKt_instance == null)
      new ComposableSingletons$RoundInstanceKt();
    return ComposableSingletons$RoundInstanceKt_instance;
  }
  function Loading$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(707941317);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(707941317, $changed, -1, 'com.minutiae.game.Loading$composable (RoundInstance.kt:136)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(1282601323);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.Loading$composable.<anonymous>' call
        var value = Loading$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, ComposableSingletons$RoundInstanceKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Loading$composable$lambda_0($changed));
    }
  }
  function Loading$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_loadingContainer_jyyy6_k$()]);
    return Unit_getInstance();
  }
  function Loading$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      Loading$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function currentQuestions$factory() {
    return getPropertyCallableRef('currentQuestions', 1, KMutableProperty1, function (receiver) {
      return _get_currentQuestions__61hfg7(receiver);
    }, function (receiver, value) {
      return _set_currentQuestions__n1mtml(receiver, value);
    });
  }
  function currentQuestions$factory_0() {
    return getPropertyCallableRef('currentQuestions', 1, KMutableProperty1, function (receiver) {
      return _get_currentQuestions__61hfg7(receiver);
    }, function (receiver, value) {
      return _set_currentQuestions__n1mtml(receiver, value);
    });
  }
  function totalScore$factory() {
    return getPropertyCallableRef('totalScore', 1, KMutableProperty1, function (receiver) {
      return receiver.get_totalScore_w14a89_k$();
    }, function (receiver, value) {
      return _set_totalScore__sk4p5j(receiver, value);
    });
  }
  function totalScore$factory_0() {
    return getPropertyCallableRef('totalScore', 1, KMutableProperty1, function (receiver) {
      return receiver.get_totalScore_w14a89_k$();
    }, function (receiver, value) {
      return _set_totalScore__sk4p5j(receiver, value);
    });
  }
  function skipsRemaining$factory() {
    return getPropertyCallableRef('skipsRemaining', 1, KMutableProperty1, function (receiver) {
      return receiver.get_skipsRemaining_n9cr63_k$();
    }, function (receiver, value) {
      return _set_skipsRemaining__1pi1n9(receiver, value);
    });
  }
  function skipsRemaining$factory_0() {
    return getPropertyCallableRef('skipsRemaining', 1, KMutableProperty1, function (receiver) {
      return receiver.get_skipsRemaining_n9cr63_k$();
    }, function (receiver, value) {
      return _set_skipsRemaining__1pi1n9(receiver, value);
    });
  }
  function questionsRemaining$factory() {
    return getPropertyCallableRef('questionsRemaining', 1, KMutableProperty1, function (receiver) {
      return receiver.get_questionsRemaining_ihyvua_k$();
    }, function (receiver, value) {
      return receiver.set_questionsRemaining_2fg3mm_k$(value);
    });
  }
  function questionsRemaining$factory_0() {
    return getPropertyCallableRef('questionsRemaining', 1, KMutableProperty1, function (receiver) {
      return receiver.get_questionsRemaining_ihyvua_k$();
    }, function (receiver, value) {
      return receiver.set_questionsRemaining_2fg3mm_k$(value);
    });
  }
  function _get_round__bsfapp($this) {
    return $this.round_1;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function RoundOver$render$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_roundOverScreen_ccjgwr_k$()]);
    return Unit_getInstance();
  }
  function RoundOver$render$composable$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_roundOverContainer_9ohhzs_k$()]);
    return Unit_getInstance();
  }
  function RoundOver$render$composable$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_roundOverSummary_j7012r_k$()]);
    return Unit_getInstance();
  }
  function RoundOver$render$composable$lambda$lambda$lambda_0(this$0, $questionsRemaining, $skipsRemaining, $total) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(172074945, $changed, -1, 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous>.<anonymous> (RoundOver.kt:16)');
        }
        SimpleText$composable('You scored ' + this$0.round_1.get_totalScore_w14a89_k$() + '!', $composer_0, 0);
        SimpleText$composable('' + $questionsRemaining + ' questions remaining = $' + $questionsRemaining, $composer_0, 0);
        SimpleText$composable('' + $skipsRemaining + ' skips remaining = $' + ($skipsRemaining / 2 | 0), $composer_0, 0);
        SimpleText$composable('Total = $' + $total, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RoundOver$render$composable$lambda$lambda$lambda$lambda($instance, $total) {
    return function (it) {
      var tmp0_this = $instance;
      tmp0_this.set_money_m5avsr_k$(tmp0_this.get_money_ivc80n_k$() + $total | 0);
      $instance.openShop_1cmd0w_k$();
      return Unit_getInstance();
    };
  }
  function RoundOver$render$composable$lambda$lambda$lambda_1($instance, $total) {
    return function ($this$StandardButton) {
      $this$StandardButton.onClick_q9cds6_k$(RoundOver$render$composable$lambda$lambda$lambda$lambda($instance, $total));
      return Unit_getInstance();
    };
  }
  function RoundOver$render$composable$lambda$lambda_0(this$0, $instance) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(176858976, $changed, -1, 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous> (RoundOver.kt:11)');
        }
        var questionsRemaining = this$0.round_1.get_questionsRemaining_ihyvua_k$();
        var skipsRemaining = this$0.round_1.get_skipsRemaining_n9cr63_k$();
        var total = questionsRemaining + (skipsRemaining / 2 | 0) | 0;
        $composer_0.startReplaceableGroup_ip860b_k$(-240169079);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = RoundOver$render$composable$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 172074945, true, RoundOver$render$composable$lambda$lambda$lambda_0(this$0, questionsRemaining, skipsRemaining, total));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_35(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(-240168685);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_0.changed_ga7h3f_k$($instance) | $composer_0.changed_kpusro_k$(total));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = RoundOver$render$composable$lambda$lambda$lambda_1($instance, total);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StandardButton$composable(tmp1_group, ComposableSingletons$RoundOverKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RoundOver$render$composable$lambda_0(this$0, $instance) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-854926145, $changed, -1, 'com.minutiae.game.RoundOver.render$composable.<anonymous> (RoundOver.kt:10)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-791555607);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = RoundOver$render$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 176858976, true, RoundOver$render$composable$lambda$lambda_0(this$0, $instance));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_36(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RoundOver$render$composable$lambda_1($tmp1_rcvr, $instance, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.render$composable_jfftuf_k$($instance, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RoundOver(round) {
    this.round_1 = round;
    this.$stable_1 = 0;
  }
  protoOf(RoundOver).render_z5v4yz_k$ = function (instance) {
    illegalDecoyCallException('render');
  };
  protoOf(RoundOver).render$composable_jfftuf_k$ = function (instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1993678889);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(instance) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1993678889, $dirty, -1, 'com.minutiae.game.RoundOver.render$composable (RoundOver.kt:8)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(1376725905);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>' call
        var value = RoundOver$render$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -854926145, true, RoundOver$render$composable$lambda_0(this, instance));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RoundOver.render$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_37(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(RoundOver$render$composable$lambda_1(this, instance, $changed));
    }
  };
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RoundOverKt$lambda_1$lambda_u3ku5k($this$StandardButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2075875171, $changed, -1, 'com.minutiae.game.ComposableSingletons$RoundOverKt.lambda-1.<anonymous> (RoundOver.kt:27)');
      }
      Text$composable('Continue', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RoundOverKt() {
    ComposableSingletons$RoundOverKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(-2075875171, false, ComposableSingletons$RoundOverKt$lambda_1$lambda_u3ku5k));
  }
  protoOf(ComposableSingletons$RoundOverKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RoundOverKt_instance;
  function ComposableSingletons$RoundOverKt_getInstance() {
    if (ComposableSingletons$RoundOverKt_instance == null)
      new ComposableSingletons$RoundOverKt();
    return ComposableSingletons$RoundOverKt_instance;
  }
  function Sidebar(questions, skips, rounds, money, blue, red, green, required, total) {
    illegalDecoyCallException('Sidebar');
  }
  function RequiredScore(required) {
    illegalDecoyCallException('RequiredScore');
  }
  function TotalScore(total) {
    illegalDecoyCallException('TotalScore');
  }
  function ScoreValues(blue, red, green) {
    illegalDecoyCallException('ScoreValues');
  }
  function ScoreValue(value, style, label) {
    illegalDecoyCallException('ScoreValue');
  }
  function RunInfo(questions, skips, rounds, money) {
    illegalDecoyCallException('RunInfo');
  }
  function RunInfoItem(value, label) {
    illegalDecoyCallException('RunInfoItem');
  }
  function Sidebar$composable(questions, skips, rounds, money, blue, red, green, required, total, $composer, $changed, $default) {
    var blue_0 = {_v: blue};
    var red_0 = {_v: red};
    var green_0 = {_v: green};
    var required_0 = {_v: required};
    var total_0 = {_v: total};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1887192205);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(questions) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(skips) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(rounds) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(money) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(blue_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(red_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(green_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(required_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(total_0._v) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 16) === 0)) {
        blue_0._v = 0;
      }
      if (!(($default & 32) === 0)) {
        red_0._v = 0;
      }
      if (!(($default & 64) === 0)) {
        green_0._v = 0;
      }
      if (!(($default & 128) === 0)) {
        required_0._v = 0;
      }
      if (!(($default & 256) === 0)) {
        total_0._v = 0;
      }
      if (isTraceInProgress()) {
        traceEventStart(1887192205, $dirty, -1, 'com.minutiae.game.Sidebar$composable (RunInfo.kt:18)');
      }
      RequiredScore$composable(required_0._v, $composer_0, 14 & $dirty >> 21);
      TotalScore$composable(total_0._v, $composer_0, 14 & $dirty >> 24);
      ScoreValues$composable(blue_0._v, red_0._v, green_0._v, $composer_0, 14 & $dirty >> 12 | 112 & $dirty >> 12 | 896 & $dirty >> 12);
      RunInfo$composable(questions, skips, rounds, money, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Sidebar$composable$lambda(questions, skips, rounds, money, blue_0, red_0, green_0, required_0, total_0, $changed, $default));
    }
  }
  function RequiredScore$composable(required, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(992574527);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(required) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(992574527, $dirty, -1, 'com.minutiae.game.RequiredScore$composable (RunInfo.kt:26)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-563916027);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RequiredScore$composable.<anonymous>' call
        var value = RequiredScore$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.RequiredScore$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1437667273, true, RequiredScore$composable$lambda_0(required));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RequiredScore$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_39(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(RequiredScore$composable$lambda_1(required, $changed));
    }
  }
  function TotalScore$composable(total, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(35661654);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(total) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(35661654, $dirty, -1, 'com.minutiae.game.TotalScore$composable (RunInfo.kt:34)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-2088482619);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.TotalScore$composable.<anonymous>' call
        var value = TotalScore$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.TotalScore$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 355770160, true, TotalScore$composable$lambda_0(total));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.TotalScore$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_40(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(TotalScore$composable$lambda_1(total, $changed));
    }
  }
  function ScoreValues$composable(blue, red, green, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1621272546);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(blue) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(red) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(green) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1621272546, $dirty, -1, 'com.minutiae.game.ScoreValues$composable (RunInfo.kt:42)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-2036861468);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ScoreValues$composable.<anonymous>' call
        var value = ScoreValues$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.ScoreValues$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -620169534, true, ScoreValues$composable$lambda_0(blue, red, green));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ScoreValues$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_41(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(ScoreValues$composable$lambda_1(blue, red, green, $changed));
    }
  }
  function ScoreValue$composable(value, style, label, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1874455033);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(value) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1874455033, $dirty, -1, 'com.minutiae.game.ScoreValue$composable (RunInfo.kt:51)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-287430208);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ScoreValue$composable.<anonymous>' call
        var value_0 = ScoreValue$composable$lambda(style);
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.ScoreValue$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1001252383, true, ScoreValue$composable$lambda_0(value, label));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ScoreValue$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_42(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(ScoreValue$composable$lambda_1(value, style, label, $changed));
    }
  }
  function RunInfo$composable(questions, skips, rounds, money, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1816982302);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(questions) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(skips) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(rounds) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(money) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1816982302, $dirty, -1, 'com.minutiae.game.RunInfo$composable (RunInfo.kt:59)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(781015220);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RunInfo$composable.<anonymous>' call
        var value = RunInfo$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.RunInfo$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -379233126, true, RunInfo$composable$lambda_0(questions, skips, rounds, money));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RunInfo$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_43(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(RunInfo$composable$lambda_1(questions, skips, rounds, money, $changed));
    }
  }
  function RunInfoItem$composable(value, label, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1500072663);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1500072663, $dirty, -1, 'com.minutiae.game.RunInfoItem$composable (RunInfo.kt:68)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1311767680);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RunInfoItem$composable.<anonymous>' call
        var value_0 = RunInfoItem$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.RunInfoItem$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1406679027, true, RunInfoItem$composable$lambda_0(value, label));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.RunInfoItem$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_44(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(RunInfoItem$composable$lambda_1(value, label, $changed));
    }
  }
  function Sidebar$composable$lambda($questions, $skips, $rounds, $money, $blue, $red, $green, $required, $total, $$changed, $$default) {
    return function ($composer, $force) {
      Sidebar$composable($questions, $skips, $rounds, $money, $blue._v, $red._v, $green._v, $required._v, $total._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function RequiredScore$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_scoreContainer_v9g5pk_k$()]);
    return Unit_getInstance();
  }
  function RequiredScore$composable$lambda$lambda($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_scoreValue_5vgrk8_k$()]);
    return Unit_getInstance();
  }
  function RequiredScore$composable$lambda$lambda_0($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_scoreLabel_5pylu3_k$()]);
    return Unit_getInstance();
  }
  function RequiredScore$composable$lambda_0($required) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1437667273, $changed, -1, 'com.minutiae.game.RequiredScore$composable.<anonymous> (RunInfo.kt:28)');
        }
        var tmp_0 = '' + $required;
        $composer_0.startReplaceableGroup_ip860b_k$(-813032206);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RequiredScore$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = RequiredScore$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StyledInlineText$composable(tmp_0, tmp0_group, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(-813032132);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RequiredScore$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = RequiredScore$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StyledInlineText$composable('Required Score', tmp1_group, $composer_0, 54, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RequiredScore$composable$lambda_1($required, $$changed) {
    return function ($composer, $force) {
      RequiredScore$composable($required, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TotalScore$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_scoreContainer_v9g5pk_k$()]);
    return Unit_getInstance();
  }
  function TotalScore$composable$lambda$lambda($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_scoreValue_5vgrk8_k$()]);
    return Unit_getInstance();
  }
  function TotalScore$composable$lambda$lambda_0($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_scoreLabel_5pylu3_k$()]);
    return Unit_getInstance();
  }
  function TotalScore$composable$lambda_0($total) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(355770160, $changed, -1, 'com.minutiae.game.TotalScore$composable.<anonymous> (RunInfo.kt:36)');
        }
        var tmp_0 = '' + $total;
        $composer_0.startReplaceableGroup_ip860b_k$(-339923665);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.TotalScore$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = TotalScore$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StyledInlineText$composable(tmp_0, tmp0_group, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(-339923594);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.TotalScore$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = TotalScore$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StyledInlineText$composable('Total Score', tmp1_group, $composer_0, 54, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TotalScore$composable$lambda_1($total, $$changed) {
    return function ($composer, $force) {
      TotalScore$composable($total, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ScoreValues$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_scoreValues_uzwff9_k$()]);
    return Unit_getInstance();
  }
  function ScoreValues$composable$lambda_0($blue, $red, $green) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-620169534, $changed, -1, 'com.minutiae.game.ScoreValues$composable.<anonymous> (RunInfo.kt:44)');
        }
        ScoreValue$composable($blue, get_Styles().get_blueScore_ugq4wh_k$(), 'Time', $composer_0, 384);
        ScoreValue$composable($red, get_Styles().get_redScore_q1pzyi_k$(), 'Guess', $composer_0, 384);
        ScoreValue$composable($green, get_Styles().get_greenScore_pyh6p4_k$(), 'Difficulty', $composer_0, 384);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ScoreValues$composable$lambda_1($blue, $red, $green, $$changed) {
    return function ($composer, $force) {
      ScoreValues$composable($blue, $red, $green, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ScoreValue$composable$lambda($style) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$([get_Styles().get_scoreComponent_nev990_k$(), $style]);
      return Unit_getInstance();
    };
  }
  function ScoreValue$composable$lambda$lambda($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_scoreComponentValue_35hpkz_k$()]);
    return Unit_getInstance();
  }
  function ScoreValue$composable$lambda$lambda_0($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_scoreComponentLabel_3azvb4_k$()]);
    return Unit_getInstance();
  }
  function ScoreValue$composable$lambda_0($value, $label) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1001252383, $changed, -1, 'com.minutiae.game.ScoreValue$composable.<anonymous> (RunInfo.kt:53)');
        }
        var tmp_0 = '' + $value;
        $composer_0.startReplaceableGroup_ip860b_k$(1915903153);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.ScoreValue$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = ScoreValue$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StyledInlineText$composable(tmp_0, tmp0_group, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(1915903225);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.ScoreValue$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ScoreValue$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StyledInlineText$composable($label, tmp1_group, $composer_0, 48, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ScoreValue$composable$lambda_1($value, $style, $label, $$changed) {
    return function ($composer, $force) {
      ScoreValue$composable($value, $style, $label, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RunInfo$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_runInfo_qw73lc_k$()]);
    return Unit_getInstance();
  }
  function RunInfo$composable$lambda_0($questions, $skips, $rounds, $money) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-379233126, $changed, -1, 'com.minutiae.game.RunInfo$composable.<anonymous> (RunInfo.kt:61)');
        }
        RunInfoItem$composable('' + $questions, 'Questions', $composer_0, 48);
        RunInfoItem$composable('' + $skips, 'Skips', $composer_0, 48);
        RunInfoItem$composable('' + $rounds, 'Round', $composer_0, 48);
        RunInfoItem$composable('$' + $money, 'Money', $composer_0, 48);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RunInfo$composable$lambda_1($questions, $skips, $rounds, $money, $$changed) {
    return function ($composer, $force) {
      RunInfo$composable($questions, $skips, $rounds, $money, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RunInfoItem$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_runInfoItem_6ag8v1_k$()]);
    return Unit_getInstance();
  }
  function RunInfoItem$composable$lambda$lambda($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_runInfoItemValue_vcdkpa_k$()]);
    return Unit_getInstance();
  }
  function RunInfoItem$composable$lambda$lambda_0($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_runInfoItemLabel_v6vez5_k$()]);
    return Unit_getInstance();
  }
  function RunInfoItem$composable$lambda_0($value, $label) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1406679027, $changed, -1, 'com.minutiae.game.RunInfoItem$composable.<anonymous> (RunInfo.kt:70)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-1323700252);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RunInfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = RunInfoItem$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StyledInlineText$composable($value, tmp0_group, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(-1323700183);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.RunInfoItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = RunInfoItem$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StyledInlineText$composable($label, tmp1_group, $composer_0, 48, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RunInfoItem$composable$lambda_1($value, $label, $$changed) {
    return function ($composer, $force) {
      RunInfoItem$composable($value, $label, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _get_random__h29cgo_0($this) {
    return $this.random_1;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function ShopInstance$modifiers$delegate$lambda(it) {
    return it.get_weight_lbhkzl_k$();
  }
  function ShopInstance$render$composable$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_shopScreen_vu32x7_k$()]);
    return Unit_getInstance();
  }
  function ShopInstance$render$composable$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_shopContainer_44r2f6_k$()]);
    return Unit_getInstance();
  }
  function ShopInstance$render$composable$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_shopSummary_xa06f_k$()]);
    return Unit_getInstance();
  }
  function ShopInstance$render$composable$lambda$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_modifierContainer_ujew5b_k$()]);
    return Unit_getInstance();
  }
  function ShopInstance$render$composable$lambda$lambda$lambda_1(this$0, $instance) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-177866974, $changed, -1, 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous> (ShopInstance.kt:25)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this$0.get_modifiers_mxb6zx_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          element.renderInShop$composable_bqwmcq_k$($instance, this$0, $composer_0, 0);
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ShopInstance$render$composable$lambda$lambda$lambda$lambda($instance) {
    return function (it) {
      $instance.startRound_h61h18_k$();
      return Unit_getInstance();
    };
  }
  function ShopInstance$render$composable$lambda$lambda$lambda_2($instance) {
    return function ($this$StandardButton) {
      $this$StandardButton.onClick_q9cds6_k$(ShopInstance$render$composable$lambda$lambda$lambda$lambda($instance));
      return Unit_getInstance();
    };
  }
  function ShopInstance$render$composable$lambda$lambda_0($instance, this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1772140008, $changed, -1, 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous> (ShopInstance.kt:20)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(721417402);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ShopInstance$render$composable$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp0_group, ComposableSingletons$ShopInstanceKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 54, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(721417542);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ShopInstance$render$composable$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, -177866974, true, ShopInstance$render$composable$lambda$lambda$lambda_1(this$0, $instance));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_45(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp1_group, tmp0, $composer_0, 54, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(721417782);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changed_ga7h3f_k$($instance);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid_0 ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ShopInstance$render$composable$lambda$lambda$lambda_2($instance);
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_7 = value_2;
        } else {
          tmp_7 = it_2;
        }
        var tmp_8 = tmp_7;
        var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StandardButton$composable(tmp2_group, ComposableSingletons$ShopInstanceKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ShopInstance$render$composable$lambda_0($instance, this$0) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-996950985, $changed, -1, 'com.minutiae.game.ShopInstance.render$composable.<anonymous> (ShopInstance.kt:19)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-1886663328);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = ShopInstance$render$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1772140008, true, ShopInstance$render$composable$lambda$lambda_0($instance, this$0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_46(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ShopInstance$render$composable$lambda_1($tmp1_rcvr, $instance, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.render$composable_jfftuf_k$($instance, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ShopInstance(random) {
    this.random_1 = random;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var tmp_0 = toMutableList(GameModifiers_getInstance());
    var this_0 = takeRandomItems(tmp_0, this.random_1, 2, VOID, VOID, ShopInstance$modifiers$delegate$lambda);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.minutiae.game.ShopInstance.modifiers$delegate.<anonymous>' call
      var tmp$ret$0 = item.getInstance_rhh4hh_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.modifiers$delegate_1 = mutableStateOf(destination);
    this.$stable_1 = 0;
  }
  protoOf(ShopInstance).set_modifiers_r3va19_k$ = function (_set____db54di) {
    var this_0 = this.modifiers$delegate_1;
    modifiers$factory_1();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(ShopInstance).get_modifiers_mxb6zx_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.modifiers$delegate_1;
    modifiers$factory_2();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(ShopInstance).render_z5v4yz_k$ = function (instance) {
    illegalDecoyCallException('render');
  };
  protoOf(ShopInstance).render$composable_jfftuf_k$ = function (instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(282301778);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(instance) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(282301778, $dirty, -1, 'com.minutiae.game.ShopInstance.render$composable (ShopInstance.kt:17)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(359054477);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>' call
        var value = ShopInstance$render$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -996950985, true, ShopInstance$render$composable$lambda_0(instance, this));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.ShopInstance.render$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_47(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp0_group, tmp0, $composer_0, 54, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(ShopInstance$render$composable$lambda_1(this, instance, $changed));
    }
  };
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ShopInstanceKt$lambda_1$lambda_s3qyyn($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1139622471, $changed, -1, 'com.minutiae.game.ComposableSingletons$ShopInstanceKt.lambda-1.<anonymous> (ShopInstance.kt:21)');
      }
      SimpleText$composable('Buy modifiers to help your run!', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ShopInstanceKt$lambda_2$lambda_e3qlya($this$StandardButton, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-575624811, $changed, -1, 'com.minutiae.game.ComposableSingletons$ShopInstanceKt.lambda-2.<anonymous> (ShopInstance.kt:33)');
      }
      Text$composable('Next Round', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ShopInstanceKt() {
    ComposableSingletons$ShopInstanceKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(-1139622471, false, ComposableSingletons$ShopInstanceKt$lambda_1$lambda_s3qyyn));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(-575624811, false, ComposableSingletons$ShopInstanceKt$lambda_2$lambda_e3qlya));
  }
  protoOf(ComposableSingletons$ShopInstanceKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ShopInstanceKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$ShopInstanceKt_instance;
  function ComposableSingletons$ShopInstanceKt_getInstance() {
    if (ComposableSingletons$ShopInstanceKt_instance == null)
      new ComposableSingletons$ShopInstanceKt();
    return ComposableSingletons$ShopInstanceKt_instance;
  }
  function modifiers$factory_1() {
    return getPropertyCallableRef('modifiers', 1, KMutableProperty1, function (receiver) {
      return receiver.get_modifiers_mxb6zx_k$();
    }, function (receiver, value) {
      return receiver.set_modifiers_r3va19_k$(value);
    });
  }
  function modifiers$factory_2() {
    return getPropertyCallableRef('modifiers', 1, KMutableProperty1, function (receiver) {
      return receiver.get_modifiers_mxb6zx_k$();
    }, function (receiver, value) {
      return receiver.set_modifiers_r3va19_k$(value);
    });
  }
  function set_themeIndex(_set____db54di) {
    _init_properties_Styles_kt__5jqpq6();
    themeIndex = _set____db54di;
  }
  function get_themeIndex() {
    _init_properties_Styles_kt__5jqpq6();
    return themeIndex;
  }
  var themeIndex;
  function set_Styles(_set____db54di) {
    _init_properties_Styles_kt__5jqpq6();
    var this_0 = Styles$delegate;
    Styles$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function get_Styles() {
    _init_properties_Styles_kt__5jqpq6();
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = Styles$delegate;
    Styles$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  var Styles$delegate;
  function cycleTheme() {
    _init_properties_Styles_kt__5jqpq6();
    set_themeIndex((get_themeIndex() + 1 | 0) % Themes_getInstance().get_themes_jxxo0j_k$().get_size_woubt6_k$() | 0);
    set_Styles(new ActiveStyle(Themes_getInstance().get_themes_jxxo0j_k$().get_c1px32_k$(get_themeIndex())));
  }
  function _get_theme__aygul4($this) {
    return $this.theme_1;
  }
  function componentFromShades(_this__u8e3s4, $this, shades) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(_this__u8e3s4, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection(_this__u8e3s4, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent(_this__u8e3s4, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems(_this__u8e3s4, 'center');
    textAlign(_this__u8e3s4, 'center');
    backgroundColor(_this__u8e3s4, shades.get_t500_wotufe_k$());
    var tmp = get_px(4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border(_this__u8e3s4, tmp, 'solid', shades.get_t700_wotvws_k$());
    borderRadius(_this__u8e3s4, get_px(10));
    padding(_this__u8e3s4, [get_px(10)]);
  }
  function get_$stableprop_9() {
    return 0;
  }
  function ActiveStyle$lambda(this$0) {
    return function ($this$invoke) {
      fontFamily($this$invoke, ['Arial']);
      cursor($this$invoke, ['default']);
      color($this$invoke, this$0.theme_1.get_text_wouvsm_k$().get_t950_wotxih_k$());
      boxSizing($this$invoke, 'border-box');
      return Unit_getInstance();
    };
  }
  function ActiveStyle$pageContainer$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      Companion_getInstance_6();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      position($this$style, tmp$ret$3);
      backgroundColor($this$style, this$0.theme_1.get_background_stpfw7_k$().get_t50_18iwre_k$());
      left($this$style, get_px(0));
      top($this$style, get_px(0));
      width($this$style, get_percent(100.0));
      minHeight($this$style, get_percent(100.0));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      padding($this$style, [get_px(10)]);
      return Unit_getInstance();
    };
  }
  function ActiveStyle$standardButton$delegate$lambda$lambda(this$0) {
    return function ($this$null) {
      backgroundColor($this$null, this$0.theme_1.get_accent_avafv7_k$().get_t700_wotvws_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$null, tmp, 'solid', this$0.theme_1.get_accent_avafv7_k$().get_t900_wotxe6_k$());
      return Unit_getInstance();
    };
  }
  function ActiveStyle$standardButton$delegate$lambda$lambda_0($this$null) {
    backgroundColor($this$null, rgb(127, 127, 127));
    var tmp = get_px(4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$null, tmp, 'solid', rgb(191, 191, 191));
    return Unit_getInstance();
  }
  function ActiveStyle$standardButton$delegate$lambda(this$0) {
    return function ($this$style) {
      backgroundColor($this$style, this$0.theme_1.get_accent_avafv7_k$().get_t500_wotufe_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_accent_avafv7_k$().get_t700_wotvws_k$());
      borderRadius($this$style, get_px(10));
      padding($this$style, [get_px(10)]);
      fontSize($this$style, get_px(20));
      fontWeight($this$style, 600);
      $this$style.property_wcrait_k$('width', 'fit-content');
      $this$style.property_wcrait_k$('height', 'fit-content');
      var tmp_0 = $this$style.plus_33ujzs_k$($this$style.get_self_wou8id_k$(), $this$style.get_hover_islez7_k$());
      $this$style.style_f6q54s_k$(tmp_0, ActiveStyle$standardButton$delegate$lambda$lambda(this$0));
      var tmp_1 = $this$style.plus_33ujzs_k$($this$style.get_self_wou8id_k$(), $this$style.get_disabled_rbmjej_k$());
      $this$style.style_f6q54s_k$(tmp_1, ActiveStyle$standardButton$delegate$lambda$lambda_0);
      return Unit_getInstance();
    };
  }
  function ActiveStyle$mainMenu$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    return Unit_getInstance();
  }
  function ActiveStyle$wholeScreen$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'row');
    flexGrow($this$style, 1);
    gap($this$style, get_px(10));
    return Unit_getInstance();
  }
  function ActiveStyle$playScreen$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    gap($this$style, get_px(10));
    flexGrow($this$style, 1);
    return Unit_getInstance();
  }
  function ActiveStyle$loadingContainer$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'row');
      backgroundColor($this$style, this$0.theme_1.get_primary_3xuktj_k$().get_t500_wotufe_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_primary_3xuktj_k$().get_t700_wotvws_k$());
      borderRadius($this$style, get_px(10));
      padding($this$style, [get_px(10)]);
      margin($this$style, [get_px(10)]);
      return Unit_getInstance();
    };
  }
  function ActiveStyle$loadingLabel$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    fontSize($this$style, get_px(50));
    fontWeight($this$style, 900);
    return Unit_getInstance();
  }
  function ActiveStyle$gameOverContainer$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    return Unit_getInstance();
  }
  function ActiveStyle$gameSummary$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
      Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      justifyContent($this$style, 'center');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
      Companion_getInstance_4();
      // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      alignItems($this$style, 'center');
      backgroundColor($this$style, this$0.theme_1.get_primary_3xuktj_k$().get_t500_wotufe_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_primary_3xuktj_k$().get_t700_wotvws_k$());
      borderRadius($this$style, get_px(10));
      $this$style.property_wcrait_k$('box-shadow', '4px 4px 8px');
      padding($this$style, [get_px(20)]);
      return Unit_getInstance();
    };
  }
  function ActiveStyle$roundOverScreen$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    return Unit_getInstance();
  }
  function ActiveStyle$roundOverContainer$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
      Companion_getInstance_4();
      // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      alignItems($this$style, 'center');
      backgroundColor($this$style, this$0.theme_1.get_primary_3xuktj_k$().get_t500_wotufe_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_primary_3xuktj_k$().get_t700_wotvws_k$());
      borderRadius($this$style, get_px(10));
      $this$style.property_wcrait_k$('box-shadow', '4px 4px 8px');
      padding($this$style, [get_px(10)]);
      gap($this$style, get_px(10));
      return Unit_getInstance();
    };
  }
  function ActiveStyle$roundOverSummary$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      textAlign($this$style, 'center');
      backgroundColor($this$style, this$0.theme_1.get_secondary_5095it_k$().get_t500_wotufe_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_secondary_5095it_k$().get_t700_wotvws_k$());
      borderRadius($this$style, get_px(10));
      padding($this$style, [get_px(10)]);
      return Unit_getInstance();
    };
  }
  function ActiveStyle$secondaryComponent$delegate$lambda(this$0) {
    return function ($this$style) {
      componentFromShades($this$style, this$0, this$0.theme_1.get_secondary_5095it_k$());
      return Unit_getInstance();
    };
  }
  function ActiveStyle$simpleText$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    return Unit_getInstance();
  }
  function ActiveStyle$shopScreen$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    return Unit_getInstance();
  }
  function ActiveStyle$shopContainer$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
      Companion_getInstance_4();
      // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      alignItems($this$style, 'center');
      backgroundColor($this$style, this$0.theme_1.get_primary_3xuktj_k$().get_t500_wotufe_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_primary_3xuktj_k$().get_t700_wotvws_k$());
      borderRadius($this$style, get_px(10));
      $this$style.property_wcrait_k$('box-shadow', '4px 4px 8px');
      padding($this$style, [get_px(10)]);
      gap($this$style, get_px(10));
      return Unit_getInstance();
    };
  }
  function ActiveStyle$shopSummary$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      textAlign($this$style, 'center');
      backgroundColor($this$style, this$0.theme_1.get_secondary_5095it_k$().get_t500_wotufe_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_secondary_5095it_k$().get_t700_wotvws_k$());
      borderRadius($this$style, get_px(10));
      padding($this$style, [get_px(10)]);
      return Unit_getInstance();
    };
  }
  function ActiveStyle$questionsPlayContainer$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_px(10));
    return Unit_getInstance();
  }
  function ActiveStyle$questionsContainer$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'row');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    width($this$style, get_percent(100.0));
    gap($this$style, get_px(10));
    return Unit_getInstance();
  }
  function ActiveStyle$question$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
      Companion_getInstance_4();
      // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      alignItems($this$style, 'center');
      backgroundColor($this$style, this$0.theme_1.get_primary_3xuktj_k$().get_t500_wotufe_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_primary_3xuktj_k$().get_t700_wotvws_k$());
      borderRadius($this$style, get_px(10));
      $this$style.property_wcrait_k$('box-shadow', '4px 4px 8px');
      padding($this$style, [get_px(10)]);
      gap($this$style, get_px(10));
      return Unit_getInstance();
    };
  }
  function ActiveStyle$questionHidden$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    width($this$style, get_percent(50.0));
    return Unit_getInstance();
  }
  function ActiveStyle$questionRevealed$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'row');
    return Unit_getInstance();
  }
  function ActiveStyle$questionCategoryAndText$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_px(10));
    return Unit_getInstance();
  }
  function ActiveStyle$answersContainer$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    gap($this$style, get_px(10));
    return Unit_getInstance();
  }
  function ActiveStyle$answer$delegate$lambda$lambda(this$0) {
    return function ($this$invoke) {
      backgroundColor($this$invoke, this$0.theme_1.get_accent_avafv7_k$().get_t700_wotvws_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$invoke, tmp, 'solid', this$0.theme_1.get_accent_avafv7_k$().get_t900_wotxe6_k$());
      return Unit_getInstance();
    };
  }
  function ActiveStyle$answer$delegate$lambda(this$0) {
    return function ($this$style) {
      textAlign($this$style, 'center');
      width($this$style, get_percent(100.0));
      padding($this$style, [get_px(10)]);
      backgroundColor($this$style, this$0.theme_1.get_accent_avafv7_k$().get_t500_wotufe_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_accent_avafv7_k$().get_t700_wotvws_k$());
      borderRadius($this$style, get_px(10));
      $this$style.property_wcrait_k$('box-shadow', '4px 4px 8px');
      var tmp_0 = $this$style.plus_33ujzs_k$($this$style.get_self_wou8id_k$(), $this$style.get_hover_islez7_k$());
      $this$style.invoke_3g5iuj_k$(tmp_0, ActiveStyle$answer$delegate$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function ActiveStyle$wrongGuess$delegate$lambda($this$style) {
    textDecoration($this$style, 'line-through');
    backgroundColor($this$style, rgb(127, 127, 127));
    var tmp = get_px(4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', rgb(63, 63, 63));
    return Unit_getInstance();
  }
  function ActiveStyle$scoreContainer$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      backgroundColor($this$style, this$0.theme_1.get_secondary_5095it_k$().get_t300_wotsy0_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_secondary_5095it_k$().get_t500_wotufe_k$());
      borderRadius($this$style, get_px(10));
      padding($this$style, [get_px(5)]);
      return Unit_getInstance();
    };
  }
  function ActiveStyle$scoreValue$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    fontSize($this$style, get_px(34));
    fontWeight($this$style, 900);
    return Unit_getInstance();
  }
  function ActiveStyle$scoreLabel$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    fontSize($this$style, get_px(20));
    fontWeight($this$style, 900);
    return Unit_getInstance();
  }
  function ActiveStyle$scoreValues$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'row');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_4();
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$style, 'center');
    return Unit_getInstance();
  }
  function ActiveStyle$scoreComponent$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    borderRadius($this$style, get_px(10));
    padding($this$style, [get_px(5)]);
    return Unit_getInstance();
  }
  function ActiveStyle$scoreComponentValue$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    fontSize($this$style, get_px(24));
    fontWeight($this$style, 900);
    return Unit_getInstance();
  }
  function ActiveStyle$scoreComponentLabel$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    fontSize($this$style, get_px(16));
    fontWeight($this$style, 600);
    return Unit_getInstance();
  }
  function ActiveStyle$blueScore$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(127, 127, 255));
    var tmp = get_px(4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', rgb(0, 0, 255));
    return Unit_getInstance();
  }
  function ActiveStyle$redScore$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(255, 127, 127));
    var tmp = get_px(4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', rgb(255, 0, 0));
    return Unit_getInstance();
  }
  function ActiveStyle$greenScore$delegate$lambda($this$style) {
    backgroundColor($this$style, rgb(127, 255, 127));
    var tmp = get_px(4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_5();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    border($this$style, tmp, 'solid', rgb(0, 255, 0));
    return Unit_getInstance();
  }
  function ActiveStyle$modifierContainer$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'row');
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = 'space-evenly';
    justifyContent($this$style, tmp$ret$11);
    minHeight($this$style, get_px(100));
    width($this$style, get_percent(100.0));
    gap($this$style, get_px(10));
    return Unit_getInstance();
  }
  function ActiveStyle$modifier$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
      Companion_getInstance_4();
      // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      alignItems($this$style, 'center');
      backgroundColor($this$style, this$0.theme_1.get_accent_avafv7_k$().get_t300_wotsy0_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_accent_avafv7_k$().get_t500_wotufe_k$());
      borderRadius($this$style, get_px(10));
      $this$style.property_wcrait_k$('box-shadow', '4px 4px 8px');
      padding($this$style, [get_px(10)]);
      textAlign($this$style, 'center');
      return Unit_getInstance();
    };
  }
  function ActiveStyle$modifierName$delegate$lambda($this$style) {
    fontWeight($this$style, 900);
    return Unit_getInstance();
  }
  function ActiveStyle$modifierButtons$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'row');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$style, 'center');
    width($this$style, get_percent(100.0));
    padding($this$style, [get_px(0)]);
    margin($this$style, [get_px(0)]);
    return Unit_getInstance();
  }
  function ActiveStyle$modifierButton$delegate$lambda($this$style) {
    padding($this$style, [get_px(0)]);
    return Unit_getInstance();
  }
  function ActiveStyle$sidebar$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$style, 'column');
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = 'space-between';
    justifyContent($this$style, tmp$ret$11);
    return Unit_getInstance();
  }
  function ActiveStyle$runInfo$delegate$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'grid');
    gridTemplateColumns($this$style, '1fr 1fr');
    return Unit_getInstance();
  }
  function ActiveStyle$runInfoItem$delegate$lambda(this$0) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_1();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexDirection($this$style, 'column');
      margin($this$style, [get_px(5)]);
      backgroundColor($this$style, this$0.theme_1.get_primary_3xuktj_k$().get_t300_wotsy0_k$());
      var tmp = get_px(4);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_5();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border($this$style, tmp, 'solid', this$0.theme_1.get_primary_3xuktj_k$().get_t500_wotufe_k$());
      borderRadius($this$style, get_px(10));
      return Unit_getInstance();
    };
  }
  function ActiveStyle$runInfoItemValue$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    fontSize($this$style, get_px(24));
    fontWeight($this$style, 900);
    return Unit_getInstance();
  }
  function ActiveStyle$runInfoItemLabel$delegate$lambda($this$style) {
    textAlign($this$style, 'center');
    fontSize($this$style, get_px(16));
    fontWeight($this$style, 600);
    return Unit_getInstance();
  }
  function ActiveStyle(theme) {
    StyleSheet.call(this);
    this.theme_1 = theme;
    var tmp = this.type_g7nfuo_k$('*');
    this.invoke_3g5iuj_k$(tmp, ActiveStyle$lambda(this));
    var tmp_0 = this;
    tmp_0.pageContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$pageContainer$delegate$lambda(this)).provideDelegate_vagi2_k$(this, pageContainer$factory());
    var tmp_1 = this;
    tmp_1.standardButton$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$standardButton$delegate$lambda(this)).provideDelegate_vagi2_k$(this, standardButton$factory());
    var tmp_2 = this;
    tmp_2.mainMenu$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$mainMenu$delegate$lambda).provideDelegate_vagi2_k$(this, mainMenu$factory());
    var tmp_3 = this;
    tmp_3.wholeScreen$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$wholeScreen$delegate$lambda).provideDelegate_vagi2_k$(this, wholeScreen$factory());
    var tmp_4 = this;
    tmp_4.playScreen$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$playScreen$delegate$lambda).provideDelegate_vagi2_k$(this, playScreen$factory());
    var tmp_5 = this;
    tmp_5.loadingContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$loadingContainer$delegate$lambda(this)).provideDelegate_vagi2_k$(this, loadingContainer$factory());
    var tmp_6 = this;
    tmp_6.loadingLabel$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$loadingLabel$delegate$lambda).provideDelegate_vagi2_k$(this, loadingLabel$factory());
    var tmp_7 = this;
    tmp_7.gameOverContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$gameOverContainer$delegate$lambda).provideDelegate_vagi2_k$(this, gameOverContainer$factory());
    var tmp_8 = this;
    tmp_8.gameSummary$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$gameSummary$delegate$lambda(this)).provideDelegate_vagi2_k$(this, gameSummary$factory());
    var tmp_9 = this;
    tmp_9.roundOverScreen$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$roundOverScreen$delegate$lambda).provideDelegate_vagi2_k$(this, roundOverScreen$factory());
    var tmp_10 = this;
    tmp_10.roundOverContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$roundOverContainer$delegate$lambda(this)).provideDelegate_vagi2_k$(this, roundOverContainer$factory());
    var tmp_11 = this;
    tmp_11.roundOverSummary$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$roundOverSummary$delegate$lambda(this)).provideDelegate_vagi2_k$(this, roundOverSummary$factory());
    var tmp_12 = this;
    tmp_12.secondaryComponent$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$secondaryComponent$delegate$lambda(this)).provideDelegate_vagi2_k$(this, secondaryComponent$factory());
    var tmp_13 = this;
    tmp_13.simpleText$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$simpleText$delegate$lambda).provideDelegate_vagi2_k$(this, simpleText$factory());
    var tmp_14 = this;
    tmp_14.shopScreen$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$shopScreen$delegate$lambda).provideDelegate_vagi2_k$(this, shopScreen$factory());
    var tmp_15 = this;
    tmp_15.shopContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$shopContainer$delegate$lambda(this)).provideDelegate_vagi2_k$(this, shopContainer$factory());
    var tmp_16 = this;
    tmp_16.shopSummary$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$shopSummary$delegate$lambda(this)).provideDelegate_vagi2_k$(this, shopSummary$factory());
    var tmp_17 = this;
    tmp_17.questionsPlayContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$questionsPlayContainer$delegate$lambda).provideDelegate_vagi2_k$(this, questionsPlayContainer$factory());
    var tmp_18 = this;
    tmp_18.questionsContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$questionsContainer$delegate$lambda).provideDelegate_vagi2_k$(this, questionsContainer$factory());
    var tmp_19 = this;
    tmp_19.question$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$question$delegate$lambda(this)).provideDelegate_vagi2_k$(this, question$factory());
    var tmp_20 = this;
    tmp_20.questionHidden$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$questionHidden$delegate$lambda).provideDelegate_vagi2_k$(this, questionHidden$factory());
    var tmp_21 = this;
    tmp_21.questionRevealed$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$questionRevealed$delegate$lambda).provideDelegate_vagi2_k$(this, questionRevealed$factory());
    var tmp_22 = this;
    tmp_22.questionCategoryAndText$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$questionCategoryAndText$delegate$lambda).provideDelegate_vagi2_k$(this, questionCategoryAndText$factory());
    var tmp_23 = this;
    tmp_23.answersContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$answersContainer$delegate$lambda).provideDelegate_vagi2_k$(this, answersContainer$factory());
    var tmp_24 = this;
    tmp_24.answer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$answer$delegate$lambda(this)).provideDelegate_vagi2_k$(this, answer$factory());
    var tmp_25 = this;
    tmp_25.wrongGuess$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$wrongGuess$delegate$lambda).provideDelegate_vagi2_k$(this, wrongGuess$factory());
    var tmp_26 = this;
    tmp_26.scoreContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$scoreContainer$delegate$lambda(this)).provideDelegate_vagi2_k$(this, scoreContainer$factory());
    var tmp_27 = this;
    tmp_27.scoreValue$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$scoreValue$delegate$lambda).provideDelegate_vagi2_k$(this, scoreValue$factory());
    var tmp_28 = this;
    tmp_28.scoreLabel$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$scoreLabel$delegate$lambda).provideDelegate_vagi2_k$(this, scoreLabel$factory());
    var tmp_29 = this;
    tmp_29.scoreValues$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$scoreValues$delegate$lambda).provideDelegate_vagi2_k$(this, scoreValues$factory());
    var tmp_30 = this;
    tmp_30.scoreComponent$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$scoreComponent$delegate$lambda).provideDelegate_vagi2_k$(this, scoreComponent$factory());
    var tmp_31 = this;
    tmp_31.scoreComponentValue$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$scoreComponentValue$delegate$lambda).provideDelegate_vagi2_k$(this, scoreComponentValue$factory());
    var tmp_32 = this;
    tmp_32.scoreComponentLabel$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$scoreComponentLabel$delegate$lambda).provideDelegate_vagi2_k$(this, scoreComponentLabel$factory());
    var tmp_33 = this;
    tmp_33.blueScore$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$blueScore$delegate$lambda).provideDelegate_vagi2_k$(this, blueScore$factory());
    var tmp_34 = this;
    tmp_34.redScore$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$redScore$delegate$lambda).provideDelegate_vagi2_k$(this, redScore$factory());
    var tmp_35 = this;
    tmp_35.greenScore$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$greenScore$delegate$lambda).provideDelegate_vagi2_k$(this, greenScore$factory());
    var tmp_36 = this;
    tmp_36.modifierContainer$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$modifierContainer$delegate$lambda).provideDelegate_vagi2_k$(this, modifierContainer$factory());
    var tmp_37 = this;
    tmp_37.modifier$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$modifier$delegate$lambda(this)).provideDelegate_vagi2_k$(this, modifier$factory());
    var tmp_38 = this;
    tmp_38.modifierName$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$modifierName$delegate$lambda).provideDelegate_vagi2_k$(this, modifierName$factory());
    var tmp_39 = this;
    tmp_39.modifierButtons$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$modifierButtons$delegate$lambda).provideDelegate_vagi2_k$(this, modifierButtons$factory());
    var tmp_40 = this;
    tmp_40.modifierButton$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$modifierButton$delegate$lambda).provideDelegate_vagi2_k$(this, modifierButton$factory());
    var tmp_41 = this;
    tmp_41.sidebar$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$sidebar$delegate$lambda).provideDelegate_vagi2_k$(this, sidebar$factory());
    var tmp_42 = this;
    tmp_42.runInfo$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$runInfo$delegate$lambda).provideDelegate_vagi2_k$(this, runInfo$factory());
    var tmp_43 = this;
    tmp_43.runInfoItem$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$runInfoItem$delegate$lambda(this)).provideDelegate_vagi2_k$(this, runInfoItem$factory());
    var tmp_44 = this;
    tmp_44.runInfoItemValue$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$runInfoItemValue$delegate$lambda).provideDelegate_vagi2_k$(this, runInfoItemValue$factory());
    var tmp_45 = this;
    tmp_45.runInfoItemLabel$delegate_1 = this.style_z1ubaq_k$(ActiveStyle$runInfoItemLabel$delegate$lambda).provideDelegate_vagi2_k$(this, runInfoItemLabel$factory());
    this.$stable_2 = 0;
  }
  protoOf(ActiveStyle).get_pageContainer_6vr6uv_k$ = function () {
    return this.pageContainer$delegate_1.getValue_4u4kqi_k$(this, pageContainer$factory_0());
  };
  protoOf(ActiveStyle).get_standardButton_7iikrs_k$ = function () {
    return this.standardButton$delegate_1.getValue_4u4kqi_k$(this, standardButton$factory_0());
  };
  protoOf(ActiveStyle).get_mainMenu_vy33i7_k$ = function () {
    return this.mainMenu$delegate_1.getValue_4u4kqi_k$(this, mainMenu$factory_0());
  };
  protoOf(ActiveStyle).get_wholeScreen_epjs0q_k$ = function () {
    return this.wholeScreen$delegate_1.getValue_4u4kqi_k$(this, wholeScreen$factory_0());
  };
  protoOf(ActiveStyle).get_playScreen_5r1361_k$ = function () {
    return this.playScreen$delegate_1.getValue_4u4kqi_k$(this, playScreen$factory_0());
  };
  protoOf(ActiveStyle).get_loadingContainer_jyyy6_k$ = function () {
    return this.loadingContainer$delegate_1.getValue_4u4kqi_k$(this, loadingContainer$factory_0());
  };
  protoOf(ActiveStyle).get_loadingLabel_rlde1t_k$ = function () {
    return this.loadingLabel$delegate_1.getValue_4u4kqi_k$(this, loadingLabel$factory_0());
  };
  protoOf(ActiveStyle).get_gameOverContainer_4l2q26_k$ = function () {
    return this.gameOverContainer$delegate_1.getValue_4u4kqi_k$(this, gameOverContainer$factory_0());
  };
  protoOf(ActiveStyle).get_gameSummary_j1anth_k$ = function () {
    return this.gameSummary$delegate_1.getValue_4u4kqi_k$(this, gameSummary$factory_0());
  };
  protoOf(ActiveStyle).get_roundOverScreen_ccjgwr_k$ = function () {
    return this.roundOverScreen$delegate_1.getValue_4u4kqi_k$(this, roundOverScreen$factory_0());
  };
  protoOf(ActiveStyle).get_roundOverContainer_9ohhzs_k$ = function () {
    return this.roundOverContainer$delegate_1.getValue_4u4kqi_k$(this, roundOverContainer$factory_0());
  };
  protoOf(ActiveStyle).get_roundOverSummary_j7012r_k$ = function () {
    return this.roundOverSummary$delegate_1.getValue_4u4kqi_k$(this, roundOverSummary$factory_0());
  };
  protoOf(ActiveStyle).get_secondaryComponent_ijmg7i_k$ = function () {
    return this.secondaryComponent$delegate_1.getValue_4u4kqi_k$(this, secondaryComponent$factory_0());
  };
  protoOf(ActiveStyle).get_simpleText_r6j5vs_k$ = function () {
    return this.simpleText$delegate_1.getValue_4u4kqi_k$(this, simpleText$factory_0());
  };
  protoOf(ActiveStyle).get_shopScreen_vu32x7_k$ = function () {
    return this.shopScreen$delegate_1.getValue_4u4kqi_k$(this, shopScreen$factory_0());
  };
  protoOf(ActiveStyle).get_shopContainer_44r2f6_k$ = function () {
    return this.shopContainer$delegate_1.getValue_4u4kqi_k$(this, shopContainer$factory_0());
  };
  protoOf(ActiveStyle).get_shopSummary_xa06f_k$ = function () {
    return this.shopSummary$delegate_1.getValue_4u4kqi_k$(this, shopSummary$factory_0());
  };
  protoOf(ActiveStyle).get_questionsPlayContainer_sk3o9j_k$ = function () {
    return this.questionsPlayContainer$delegate_1.getValue_4u4kqi_k$(this, questionsPlayContainer$factory_0());
  };
  protoOf(ActiveStyle).get_questionsContainer_2okzwj_k$ = function () {
    return this.questionsContainer$delegate_1.getValue_4u4kqi_k$(this, questionsContainer$factory_0());
  };
  protoOf(ActiveStyle).get_question_jy1o6n_k$ = function () {
    return this.question$delegate_1.getValue_4u4kqi_k$(this, question$factory_0());
  };
  protoOf(ActiveStyle).get_questionHidden_8pxivb_k$ = function () {
    return this.questionHidden$delegate_1.getValue_4u4kqi_k$(this, questionHidden$factory_0());
  };
  protoOf(ActiveStyle).get_questionRevealed_qdzny3_k$ = function () {
    return this.questionRevealed$delegate_1.getValue_4u4kqi_k$(this, questionRevealed$factory_0());
  };
  protoOf(ActiveStyle).get_questionCategoryAndText_xn1nu1_k$ = function () {
    return this.questionCategoryAndText$delegate_1.getValue_4u4kqi_k$(this, questionCategoryAndText$factory_0());
  };
  protoOf(ActiveStyle).get_answersContainer_ejqwd1_k$ = function () {
    return this.answersContainer$delegate_1.getValue_4u4kqi_k$(this, answersContainer$factory_0());
  };
  protoOf(ActiveStyle).get_answer_b1mrbb_k$ = function () {
    return this.answer$delegate_1.getValue_4u4kqi_k$(this, answer$factory_0());
  };
  protoOf(ActiveStyle).get_wrongGuess_g9t83x_k$ = function () {
    return this.wrongGuess$delegate_1.getValue_4u4kqi_k$(this, wrongGuess$factory_0());
  };
  protoOf(ActiveStyle).get_scoreContainer_v9g5pk_k$ = function () {
    return this.scoreContainer$delegate_1.getValue_4u4kqi_k$(this, scoreContainer$factory_0());
  };
  protoOf(ActiveStyle).get_scoreValue_5vgrk8_k$ = function () {
    return this.scoreValue$delegate_1.getValue_4u4kqi_k$(this, scoreValue$factory_0());
  };
  protoOf(ActiveStyle).get_scoreLabel_5pylu3_k$ = function () {
    return this.scoreLabel$delegate_1.getValue_4u4kqi_k$(this, scoreLabel$factory_0());
  };
  protoOf(ActiveStyle).get_scoreValues_uzwff9_k$ = function () {
    return this.scoreValues$delegate_1.getValue_4u4kqi_k$(this, scoreValues$factory_0());
  };
  protoOf(ActiveStyle).get_scoreComponent_nev990_k$ = function () {
    return this.scoreComponent$delegate_1.getValue_4u4kqi_k$(this, scoreComponent$factory_0());
  };
  protoOf(ActiveStyle).get_scoreComponentValue_35hpkz_k$ = function () {
    return this.scoreComponentValue$delegate_1.getValue_4u4kqi_k$(this, scoreComponentValue$factory_0());
  };
  protoOf(ActiveStyle).get_scoreComponentLabel_3azvb4_k$ = function () {
    return this.scoreComponentLabel$delegate_1.getValue_4u4kqi_k$(this, scoreComponentLabel$factory_0());
  };
  protoOf(ActiveStyle).get_blueScore_ugq4wh_k$ = function () {
    return this.blueScore$delegate_1.getValue_4u4kqi_k$(this, blueScore$factory_0());
  };
  protoOf(ActiveStyle).get_redScore_q1pzyi_k$ = function () {
    return this.redScore$delegate_1.getValue_4u4kqi_k$(this, redScore$factory_0());
  };
  protoOf(ActiveStyle).get_greenScore_pyh6p4_k$ = function () {
    return this.greenScore$delegate_1.getValue_4u4kqi_k$(this, greenScore$factory_0());
  };
  protoOf(ActiveStyle).get_modifierContainer_ujew5b_k$ = function () {
    return this.modifierContainer$delegate_1.getValue_4u4kqi_k$(this, modifierContainer$factory_0());
  };
  protoOf(ActiveStyle).get_modifier_t1pq5c_k$ = function () {
    return this.modifier$delegate_1.getValue_4u4kqi_k$(this, modifier$factory_0());
  };
  protoOf(ActiveStyle).get_modifierName_5l9rcl_k$ = function () {
    return this.modifierName$delegate_1.getValue_4u4kqi_k$(this, modifierName$factory_0());
  };
  protoOf(ActiveStyle).get_modifierButtons_efr6tb_k$ = function () {
    return this.modifierButtons$delegate_1.getValue_4u4kqi_k$(this, modifierButtons$factory_0());
  };
  protoOf(ActiveStyle).get_modifierButton_k5md4i_k$ = function () {
    return this.modifierButton$delegate_1.getValue_4u4kqi_k$(this, modifierButton$factory_0());
  };
  protoOf(ActiveStyle).get_sidebar_za2g7h_k$ = function () {
    return this.sidebar$delegate_1.getValue_4u4kqi_k$(this, sidebar$factory_0());
  };
  protoOf(ActiveStyle).get_runInfo_qw73lc_k$ = function () {
    return this.runInfo$delegate_1.getValue_4u4kqi_k$(this, runInfo$factory_0());
  };
  protoOf(ActiveStyle).get_runInfoItem_6ag8v1_k$ = function () {
    return this.runInfoItem$delegate_1.getValue_4u4kqi_k$(this, runInfoItem$factory_0());
  };
  protoOf(ActiveStyle).get_runInfoItemValue_vcdkpa_k$ = function () {
    return this.runInfoItemValue$delegate_1.getValue_4u4kqi_k$(this, runInfoItemValue$factory_0());
  };
  protoOf(ActiveStyle).get_runInfoItemLabel_v6vez5_k$ = function () {
    return this.runInfoItemLabel$delegate_1.getValue_4u4kqi_k$(this, runInfoItemLabel$factory_0());
  };
  protoOf(ActiveStyle).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  function Styles$factory() {
    return getPropertyCallableRef('Styles', 0, KMutableProperty0, function () {
      return get_Styles();
    }, function (value) {
      return set_Styles(value);
    });
  }
  function Styles$factory_0() {
    return getPropertyCallableRef('Styles', 0, KMutableProperty0, function () {
      return get_Styles();
    }, function (value) {
      return set_Styles(value);
    });
  }
  function pageContainer$factory() {
    return getPropertyCallableRef('pageContainer', 1, KProperty1, function (receiver) {
      return receiver.get_pageContainer_6vr6uv_k$();
    }, null);
  }
  function standardButton$factory() {
    return getPropertyCallableRef('standardButton', 1, KProperty1, function (receiver) {
      return receiver.get_standardButton_7iikrs_k$();
    }, null);
  }
  function mainMenu$factory() {
    return getPropertyCallableRef('mainMenu', 1, KProperty1, function (receiver) {
      return receiver.get_mainMenu_vy33i7_k$();
    }, null);
  }
  function wholeScreen$factory() {
    return getPropertyCallableRef('wholeScreen', 1, KProperty1, function (receiver) {
      return receiver.get_wholeScreen_epjs0q_k$();
    }, null);
  }
  function playScreen$factory() {
    return getPropertyCallableRef('playScreen', 1, KProperty1, function (receiver) {
      return receiver.get_playScreen_5r1361_k$();
    }, null);
  }
  function loadingContainer$factory() {
    return getPropertyCallableRef('loadingContainer', 1, KProperty1, function (receiver) {
      return receiver.get_loadingContainer_jyyy6_k$();
    }, null);
  }
  function loadingLabel$factory() {
    return getPropertyCallableRef('loadingLabel', 1, KProperty1, function (receiver) {
      return receiver.get_loadingLabel_rlde1t_k$();
    }, null);
  }
  function gameOverContainer$factory() {
    return getPropertyCallableRef('gameOverContainer', 1, KProperty1, function (receiver) {
      return receiver.get_gameOverContainer_4l2q26_k$();
    }, null);
  }
  function gameSummary$factory() {
    return getPropertyCallableRef('gameSummary', 1, KProperty1, function (receiver) {
      return receiver.get_gameSummary_j1anth_k$();
    }, null);
  }
  function roundOverScreen$factory() {
    return getPropertyCallableRef('roundOverScreen', 1, KProperty1, function (receiver) {
      return receiver.get_roundOverScreen_ccjgwr_k$();
    }, null);
  }
  function roundOverContainer$factory() {
    return getPropertyCallableRef('roundOverContainer', 1, KProperty1, function (receiver) {
      return receiver.get_roundOverContainer_9ohhzs_k$();
    }, null);
  }
  function roundOverSummary$factory() {
    return getPropertyCallableRef('roundOverSummary', 1, KProperty1, function (receiver) {
      return receiver.get_roundOverSummary_j7012r_k$();
    }, null);
  }
  function secondaryComponent$factory() {
    return getPropertyCallableRef('secondaryComponent', 1, KProperty1, function (receiver) {
      return receiver.get_secondaryComponent_ijmg7i_k$();
    }, null);
  }
  function simpleText$factory() {
    return getPropertyCallableRef('simpleText', 1, KProperty1, function (receiver) {
      return receiver.get_simpleText_r6j5vs_k$();
    }, null);
  }
  function shopScreen$factory() {
    return getPropertyCallableRef('shopScreen', 1, KProperty1, function (receiver) {
      return receiver.get_shopScreen_vu32x7_k$();
    }, null);
  }
  function shopContainer$factory() {
    return getPropertyCallableRef('shopContainer', 1, KProperty1, function (receiver) {
      return receiver.get_shopContainer_44r2f6_k$();
    }, null);
  }
  function shopSummary$factory() {
    return getPropertyCallableRef('shopSummary', 1, KProperty1, function (receiver) {
      return receiver.get_shopSummary_xa06f_k$();
    }, null);
  }
  function questionsPlayContainer$factory() {
    return getPropertyCallableRef('questionsPlayContainer', 1, KProperty1, function (receiver) {
      return receiver.get_questionsPlayContainer_sk3o9j_k$();
    }, null);
  }
  function questionsContainer$factory() {
    return getPropertyCallableRef('questionsContainer', 1, KProperty1, function (receiver) {
      return receiver.get_questionsContainer_2okzwj_k$();
    }, null);
  }
  function question$factory() {
    return getPropertyCallableRef('question', 1, KProperty1, function (receiver) {
      return receiver.get_question_jy1o6n_k$();
    }, null);
  }
  function questionHidden$factory() {
    return getPropertyCallableRef('questionHidden', 1, KProperty1, function (receiver) {
      return receiver.get_questionHidden_8pxivb_k$();
    }, null);
  }
  function questionRevealed$factory() {
    return getPropertyCallableRef('questionRevealed', 1, KProperty1, function (receiver) {
      return receiver.get_questionRevealed_qdzny3_k$();
    }, null);
  }
  function questionCategoryAndText$factory() {
    return getPropertyCallableRef('questionCategoryAndText', 1, KProperty1, function (receiver) {
      return receiver.get_questionCategoryAndText_xn1nu1_k$();
    }, null);
  }
  function answersContainer$factory() {
    return getPropertyCallableRef('answersContainer', 1, KProperty1, function (receiver) {
      return receiver.get_answersContainer_ejqwd1_k$();
    }, null);
  }
  function answer$factory() {
    return getPropertyCallableRef('answer', 1, KProperty1, function (receiver) {
      return receiver.get_answer_b1mrbb_k$();
    }, null);
  }
  function wrongGuess$factory() {
    return getPropertyCallableRef('wrongGuess', 1, KProperty1, function (receiver) {
      return receiver.get_wrongGuess_g9t83x_k$();
    }, null);
  }
  function scoreContainer$factory() {
    return getPropertyCallableRef('scoreContainer', 1, KProperty1, function (receiver) {
      return receiver.get_scoreContainer_v9g5pk_k$();
    }, null);
  }
  function scoreValue$factory() {
    return getPropertyCallableRef('scoreValue', 1, KProperty1, function (receiver) {
      return receiver.get_scoreValue_5vgrk8_k$();
    }, null);
  }
  function scoreLabel$factory() {
    return getPropertyCallableRef('scoreLabel', 1, KProperty1, function (receiver) {
      return receiver.get_scoreLabel_5pylu3_k$();
    }, null);
  }
  function scoreValues$factory() {
    return getPropertyCallableRef('scoreValues', 1, KProperty1, function (receiver) {
      return receiver.get_scoreValues_uzwff9_k$();
    }, null);
  }
  function scoreComponent$factory() {
    return getPropertyCallableRef('scoreComponent', 1, KProperty1, function (receiver) {
      return receiver.get_scoreComponent_nev990_k$();
    }, null);
  }
  function scoreComponentValue$factory() {
    return getPropertyCallableRef('scoreComponentValue', 1, KProperty1, function (receiver) {
      return receiver.get_scoreComponentValue_35hpkz_k$();
    }, null);
  }
  function scoreComponentLabel$factory() {
    return getPropertyCallableRef('scoreComponentLabel', 1, KProperty1, function (receiver) {
      return receiver.get_scoreComponentLabel_3azvb4_k$();
    }, null);
  }
  function blueScore$factory() {
    return getPropertyCallableRef('blueScore', 1, KProperty1, function (receiver) {
      return receiver.get_blueScore_ugq4wh_k$();
    }, null);
  }
  function redScore$factory() {
    return getPropertyCallableRef('redScore', 1, KProperty1, function (receiver) {
      return receiver.get_redScore_q1pzyi_k$();
    }, null);
  }
  function greenScore$factory() {
    return getPropertyCallableRef('greenScore', 1, KProperty1, function (receiver) {
      return receiver.get_greenScore_pyh6p4_k$();
    }, null);
  }
  function modifierContainer$factory() {
    return getPropertyCallableRef('modifierContainer', 1, KProperty1, function (receiver) {
      return receiver.get_modifierContainer_ujew5b_k$();
    }, null);
  }
  function modifier$factory() {
    return getPropertyCallableRef('modifier', 1, KProperty1, function (receiver) {
      return receiver.get_modifier_t1pq5c_k$();
    }, null);
  }
  function modifierName$factory() {
    return getPropertyCallableRef('modifierName', 1, KProperty1, function (receiver) {
      return receiver.get_modifierName_5l9rcl_k$();
    }, null);
  }
  function modifierButtons$factory() {
    return getPropertyCallableRef('modifierButtons', 1, KProperty1, function (receiver) {
      return receiver.get_modifierButtons_efr6tb_k$();
    }, null);
  }
  function modifierButton$factory() {
    return getPropertyCallableRef('modifierButton', 1, KProperty1, function (receiver) {
      return receiver.get_modifierButton_k5md4i_k$();
    }, null);
  }
  function sidebar$factory() {
    return getPropertyCallableRef('sidebar', 1, KProperty1, function (receiver) {
      return receiver.get_sidebar_za2g7h_k$();
    }, null);
  }
  function runInfo$factory() {
    return getPropertyCallableRef('runInfo', 1, KProperty1, function (receiver) {
      return receiver.get_runInfo_qw73lc_k$();
    }, null);
  }
  function runInfoItem$factory() {
    return getPropertyCallableRef('runInfoItem', 1, KProperty1, function (receiver) {
      return receiver.get_runInfoItem_6ag8v1_k$();
    }, null);
  }
  function runInfoItemValue$factory() {
    return getPropertyCallableRef('runInfoItemValue', 1, KProperty1, function (receiver) {
      return receiver.get_runInfoItemValue_vcdkpa_k$();
    }, null);
  }
  function runInfoItemLabel$factory() {
    return getPropertyCallableRef('runInfoItemLabel', 1, KProperty1, function (receiver) {
      return receiver.get_runInfoItemLabel_v6vez5_k$();
    }, null);
  }
  function pageContainer$factory_0() {
    return getPropertyCallableRef('pageContainer', 1, KProperty1, function (receiver) {
      return receiver.get_pageContainer_6vr6uv_k$();
    }, null);
  }
  function standardButton$factory_0() {
    return getPropertyCallableRef('standardButton', 1, KProperty1, function (receiver) {
      return receiver.get_standardButton_7iikrs_k$();
    }, null);
  }
  function mainMenu$factory_0() {
    return getPropertyCallableRef('mainMenu', 1, KProperty1, function (receiver) {
      return receiver.get_mainMenu_vy33i7_k$();
    }, null);
  }
  function wholeScreen$factory_0() {
    return getPropertyCallableRef('wholeScreen', 1, KProperty1, function (receiver) {
      return receiver.get_wholeScreen_epjs0q_k$();
    }, null);
  }
  function playScreen$factory_0() {
    return getPropertyCallableRef('playScreen', 1, KProperty1, function (receiver) {
      return receiver.get_playScreen_5r1361_k$();
    }, null);
  }
  function loadingContainer$factory_0() {
    return getPropertyCallableRef('loadingContainer', 1, KProperty1, function (receiver) {
      return receiver.get_loadingContainer_jyyy6_k$();
    }, null);
  }
  function loadingLabel$factory_0() {
    return getPropertyCallableRef('loadingLabel', 1, KProperty1, function (receiver) {
      return receiver.get_loadingLabel_rlde1t_k$();
    }, null);
  }
  function gameOverContainer$factory_0() {
    return getPropertyCallableRef('gameOverContainer', 1, KProperty1, function (receiver) {
      return receiver.get_gameOverContainer_4l2q26_k$();
    }, null);
  }
  function gameSummary$factory_0() {
    return getPropertyCallableRef('gameSummary', 1, KProperty1, function (receiver) {
      return receiver.get_gameSummary_j1anth_k$();
    }, null);
  }
  function roundOverScreen$factory_0() {
    return getPropertyCallableRef('roundOverScreen', 1, KProperty1, function (receiver) {
      return receiver.get_roundOverScreen_ccjgwr_k$();
    }, null);
  }
  function roundOverContainer$factory_0() {
    return getPropertyCallableRef('roundOverContainer', 1, KProperty1, function (receiver) {
      return receiver.get_roundOverContainer_9ohhzs_k$();
    }, null);
  }
  function roundOverSummary$factory_0() {
    return getPropertyCallableRef('roundOverSummary', 1, KProperty1, function (receiver) {
      return receiver.get_roundOverSummary_j7012r_k$();
    }, null);
  }
  function secondaryComponent$factory_0() {
    return getPropertyCallableRef('secondaryComponent', 1, KProperty1, function (receiver) {
      return receiver.get_secondaryComponent_ijmg7i_k$();
    }, null);
  }
  function simpleText$factory_0() {
    return getPropertyCallableRef('simpleText', 1, KProperty1, function (receiver) {
      return receiver.get_simpleText_r6j5vs_k$();
    }, null);
  }
  function shopScreen$factory_0() {
    return getPropertyCallableRef('shopScreen', 1, KProperty1, function (receiver) {
      return receiver.get_shopScreen_vu32x7_k$();
    }, null);
  }
  function shopContainer$factory_0() {
    return getPropertyCallableRef('shopContainer', 1, KProperty1, function (receiver) {
      return receiver.get_shopContainer_44r2f6_k$();
    }, null);
  }
  function shopSummary$factory_0() {
    return getPropertyCallableRef('shopSummary', 1, KProperty1, function (receiver) {
      return receiver.get_shopSummary_xa06f_k$();
    }, null);
  }
  function questionsPlayContainer$factory_0() {
    return getPropertyCallableRef('questionsPlayContainer', 1, KProperty1, function (receiver) {
      return receiver.get_questionsPlayContainer_sk3o9j_k$();
    }, null);
  }
  function questionsContainer$factory_0() {
    return getPropertyCallableRef('questionsContainer', 1, KProperty1, function (receiver) {
      return receiver.get_questionsContainer_2okzwj_k$();
    }, null);
  }
  function question$factory_0() {
    return getPropertyCallableRef('question', 1, KProperty1, function (receiver) {
      return receiver.get_question_jy1o6n_k$();
    }, null);
  }
  function questionHidden$factory_0() {
    return getPropertyCallableRef('questionHidden', 1, KProperty1, function (receiver) {
      return receiver.get_questionHidden_8pxivb_k$();
    }, null);
  }
  function questionRevealed$factory_0() {
    return getPropertyCallableRef('questionRevealed', 1, KProperty1, function (receiver) {
      return receiver.get_questionRevealed_qdzny3_k$();
    }, null);
  }
  function questionCategoryAndText$factory_0() {
    return getPropertyCallableRef('questionCategoryAndText', 1, KProperty1, function (receiver) {
      return receiver.get_questionCategoryAndText_xn1nu1_k$();
    }, null);
  }
  function answersContainer$factory_0() {
    return getPropertyCallableRef('answersContainer', 1, KProperty1, function (receiver) {
      return receiver.get_answersContainer_ejqwd1_k$();
    }, null);
  }
  function answer$factory_0() {
    return getPropertyCallableRef('answer', 1, KProperty1, function (receiver) {
      return receiver.get_answer_b1mrbb_k$();
    }, null);
  }
  function wrongGuess$factory_0() {
    return getPropertyCallableRef('wrongGuess', 1, KProperty1, function (receiver) {
      return receiver.get_wrongGuess_g9t83x_k$();
    }, null);
  }
  function scoreContainer$factory_0() {
    return getPropertyCallableRef('scoreContainer', 1, KProperty1, function (receiver) {
      return receiver.get_scoreContainer_v9g5pk_k$();
    }, null);
  }
  function scoreValue$factory_0() {
    return getPropertyCallableRef('scoreValue', 1, KProperty1, function (receiver) {
      return receiver.get_scoreValue_5vgrk8_k$();
    }, null);
  }
  function scoreLabel$factory_0() {
    return getPropertyCallableRef('scoreLabel', 1, KProperty1, function (receiver) {
      return receiver.get_scoreLabel_5pylu3_k$();
    }, null);
  }
  function scoreValues$factory_0() {
    return getPropertyCallableRef('scoreValues', 1, KProperty1, function (receiver) {
      return receiver.get_scoreValues_uzwff9_k$();
    }, null);
  }
  function scoreComponent$factory_0() {
    return getPropertyCallableRef('scoreComponent', 1, KProperty1, function (receiver) {
      return receiver.get_scoreComponent_nev990_k$();
    }, null);
  }
  function scoreComponentValue$factory_0() {
    return getPropertyCallableRef('scoreComponentValue', 1, KProperty1, function (receiver) {
      return receiver.get_scoreComponentValue_35hpkz_k$();
    }, null);
  }
  function scoreComponentLabel$factory_0() {
    return getPropertyCallableRef('scoreComponentLabel', 1, KProperty1, function (receiver) {
      return receiver.get_scoreComponentLabel_3azvb4_k$();
    }, null);
  }
  function blueScore$factory_0() {
    return getPropertyCallableRef('blueScore', 1, KProperty1, function (receiver) {
      return receiver.get_blueScore_ugq4wh_k$();
    }, null);
  }
  function redScore$factory_0() {
    return getPropertyCallableRef('redScore', 1, KProperty1, function (receiver) {
      return receiver.get_redScore_q1pzyi_k$();
    }, null);
  }
  function greenScore$factory_0() {
    return getPropertyCallableRef('greenScore', 1, KProperty1, function (receiver) {
      return receiver.get_greenScore_pyh6p4_k$();
    }, null);
  }
  function modifierContainer$factory_0() {
    return getPropertyCallableRef('modifierContainer', 1, KProperty1, function (receiver) {
      return receiver.get_modifierContainer_ujew5b_k$();
    }, null);
  }
  function modifier$factory_0() {
    return getPropertyCallableRef('modifier', 1, KProperty1, function (receiver) {
      return receiver.get_modifier_t1pq5c_k$();
    }, null);
  }
  function modifierName$factory_0() {
    return getPropertyCallableRef('modifierName', 1, KProperty1, function (receiver) {
      return receiver.get_modifierName_5l9rcl_k$();
    }, null);
  }
  function modifierButtons$factory_0() {
    return getPropertyCallableRef('modifierButtons', 1, KProperty1, function (receiver) {
      return receiver.get_modifierButtons_efr6tb_k$();
    }, null);
  }
  function modifierButton$factory_0() {
    return getPropertyCallableRef('modifierButton', 1, KProperty1, function (receiver) {
      return receiver.get_modifierButton_k5md4i_k$();
    }, null);
  }
  function sidebar$factory_0() {
    return getPropertyCallableRef('sidebar', 1, KProperty1, function (receiver) {
      return receiver.get_sidebar_za2g7h_k$();
    }, null);
  }
  function runInfo$factory_0() {
    return getPropertyCallableRef('runInfo', 1, KProperty1, function (receiver) {
      return receiver.get_runInfo_qw73lc_k$();
    }, null);
  }
  function runInfoItem$factory_0() {
    return getPropertyCallableRef('runInfoItem', 1, KProperty1, function (receiver) {
      return receiver.get_runInfoItem_6ag8v1_k$();
    }, null);
  }
  function runInfoItemValue$factory_0() {
    return getPropertyCallableRef('runInfoItemValue', 1, KProperty1, function (receiver) {
      return receiver.get_runInfoItemValue_vcdkpa_k$();
    }, null);
  }
  function runInfoItemLabel$factory_0() {
    return getPropertyCallableRef('runInfoItemLabel', 1, KProperty1, function (receiver) {
      return receiver.get_runInfoItemLabel_v6vez5_k$();
    }, null);
  }
  var properties_initialized_Styles_kt_50dsx0;
  function _init_properties_Styles_kt__5jqpq6() {
    if (!properties_initialized_Styles_kt_50dsx0) {
      properties_initialized_Styles_kt_50dsx0 = true;
      themeIndex = 0;
      Styles$delegate = mutableStateOf(new ActiveStyle(Themes_getInstance().get_themes_jxxo0j_k$().get_c1px32_k$(get_themeIndex())));
    }
  }
  function forEachMatching(_this__u8e3s4, k, block) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.minutiae.game.event.forEachMatching.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kClass = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var target = element.get_value_j01efc_k$();
      if (kClass.isInstance_6tn68w_k$(k))
        block(target);
    }
  }
  function _get_listeners__760gzy($this) {
    return $this.listeners_1;
  }
  function get_$stableprop_10() {
    return 8;
  }
  function EventBus$post$lambda($event) {
    return function (handlers) {
      var tmp0_iterator = handlers.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.minutiae.game.event.EventBus.post.<anonymous>.<anonymous>' call
        element($event);
      }
      return Unit_getInstance();
    };
  }
  function EventBus() {
    EventBus_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.listeners_1 = LinkedHashMap_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(EventBus).set_psmzpi_k$ = function (kClass, block) {
    // Inline function 'kotlin.collections.plusAssign' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.listeners_1;
    var value = this_0.get_wei43m_k$(kClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$_0();
      this_0.put_4fpzoq_k$(kClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var this_1 = tmp;
    var element = typeof block === 'function' ? block : THROW_CCE();
    this_1.add_utx5q5_k$(element);
  };
  protoOf(EventBus).post_4asmox_k$ = function (event) {
    forEachMatching(this.listeners_1, event, EventBus$post$lambda(event));
    return event;
  };
  var EventBus_instance;
  function EventBus_getInstance() {
    if (EventBus_instance == null)
      new EventBus();
    return EventBus_instance;
  }
  function onEvent($this, event) {
    var tmp0_safe_receiver = get_gameInstance();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_modifiers_mxb6zx_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.minutiae.game.event.GameModifierEventHandler.onEvent.<anonymous>' call
        element.onEvent_hdbvys_k$(event);
      }
    }
  }
  function get_$stableprop_11() {
    return 0;
  }
  function GameModifierEventHandler$onEvent$ref($boundThis) {
    var l = function (p0) {
      onEvent($boundThis, p0);
      return Unit_getInstance();
    };
    l.callableName = 'onEvent';
    return l;
  }
  function GameModifierEventHandler() {
    GameModifierEventHandler_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(GameModifierEventHandler).listeners_uhfd9c_k$ = function (bus) {
    var tmp = getKClass(Event);
    bus.set_psmzpi_k$(tmp, GameModifierEventHandler$onEvent$ref(this));
  };
  var GameModifierEventHandler_instance;
  function GameModifierEventHandler_getInstance() {
    if (GameModifierEventHandler_instance == null)
      new GameModifierEventHandler();
    return GameModifierEventHandler_instance;
  }
  function get_$stableprop_12() {
    return 0;
  }
  function Event() {
    this.$stable_1 = 0;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function GameStartEvent(instance) {
    Event.call(this);
    this.instance_1 = instance;
    this.$stable_2 = 0;
  }
  protoOf(GameStartEvent).get_instance_mmff6q_k$ = function () {
    return this.instance_1;
  };
  function get_$stableprop_14() {
    return 8;
  }
  function RunInfoEvent(questions, skips) {
    Event.call(this);
    this.questions_1 = questions;
    this.skips_1 = skips;
    this.$stable_2 = 8;
  }
  protoOf(RunInfoEvent).set_questions_xz5lpk_k$ = function (_set____db54di) {
    this.questions_1 = _set____db54di;
  };
  protoOf(RunInfoEvent).get_questions_kyknz0_k$ = function () {
    return this.questions_1;
  };
  protoOf(RunInfoEvent).set_skips_tad5gx_k$ = function (_set____db54di) {
    this.skips_1 = _set____db54di;
  };
  protoOf(RunInfoEvent).get_skips_iykc6j_k$ = function () {
    return this.skips_1;
  };
  function get_$stableprop_15() {
    return 8;
  }
  function RequiredScoreEvent(requiredScore) {
    Event.call(this);
    this.requiredScore_1 = requiredScore;
    this.$stable_2 = 8;
  }
  protoOf(RequiredScoreEvent).set_requiredScore_gpqhxq_k$ = function (_set____db54di) {
    this.requiredScore_1 = _set____db54di;
  };
  protoOf(RequiredScoreEvent).get_requiredScore_g4q58q_k$ = function () {
    return this.requiredScore_1;
  };
  function get_$stableprop_16() {
    return 8;
  }
  function RoundWinEvent(totalScore, questionsRemaining, skipsRemaining) {
    Event.call(this);
    this.totalScore_1 = totalScore;
    this.questionsRemaining_1 = questionsRemaining;
    this.skipsRemaining_1 = skipsRemaining;
    this.$stable_2 = 8;
  }
  protoOf(RoundWinEvent).set_totalScore_mjls3n_k$ = function (_set____db54di) {
    this.totalScore_1 = _set____db54di;
  };
  protoOf(RoundWinEvent).get_totalScore_w14a89_k$ = function () {
    return this.totalScore_1;
  };
  protoOf(RoundWinEvent).set_questionsRemaining_2fg3mm_k$ = function (_set____db54di) {
    this.questionsRemaining_1 = _set____db54di;
  };
  protoOf(RoundWinEvent).get_questionsRemaining_ihyvua_k$ = function () {
    return this.questionsRemaining_1;
  };
  protoOf(RoundWinEvent).set_skipsRemaining_umdg0n_k$ = function (_set____db54di) {
    this.skipsRemaining_1 = _set____db54di;
  };
  protoOf(RoundWinEvent).get_skipsRemaining_n9cr63_k$ = function () {
    return this.skipsRemaining_1;
  };
  function get_$stableprop_17() {
    return 8;
  }
  function ScoreQuestionEvent(question, time, guesses, difficulty) {
    Event.call(this);
    this.question_1 = question;
    this.time_1 = time;
    this.guesses_1 = guesses;
    this.difficulty_1 = difficulty;
    this.additional_1 = 1;
    this.$stable_2 = 8;
  }
  protoOf(ScoreQuestionEvent).get_question_jy1o6n_k$ = function () {
    return this.question_1;
  };
  protoOf(ScoreQuestionEvent).set_time_7don5u_k$ = function (_set____db54di) {
    this.time_1 = _set____db54di;
  };
  protoOf(ScoreQuestionEvent).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(ScoreQuestionEvent).set_guesses_512lpc_k$ = function (_set____db54di) {
    this.guesses_1 = _set____db54di;
  };
  protoOf(ScoreQuestionEvent).get_guesses_7duuvw_k$ = function () {
    return this.guesses_1;
  };
  protoOf(ScoreQuestionEvent).set_difficulty_jdwto0_k$ = function (_set____db54di) {
    this.difficulty_1 = _set____db54di;
  };
  protoOf(ScoreQuestionEvent).get_difficulty_a2zhac_k$ = function () {
    return this.difficulty_1;
  };
  protoOf(ScoreQuestionEvent).set_additional_ddcrfo_k$ = function (_set____db54di) {
    this.additional_1 = _set____db54di;
  };
  protoOf(ScoreQuestionEvent).get_additional_iwy374_k$ = function () {
    return this.additional_1;
  };
  protoOf(ScoreQuestionEvent).get_score_iyfcrt_k$ = function () {
    return imul(imul(imul(this.time_1, this.guesses_1), this.difficulty_1), this.additional_1);
  };
  function get_$stableprop_18() {
    return 8;
  }
  function SelectCategoryEvent$getCategory$lambda(it) {
    return it.get_weight_lbhkzl_k$();
  }
  function SelectCategoryEvent(categories) {
    Event.call(this);
    this.categories_1 = categories;
    this.$stable_2 = 8;
  }
  protoOf(SelectCategoryEvent).get_categories_19ns11_k$ = function () {
    return this.categories_1;
  };
  protoOf(SelectCategoryEvent).getCategory_p4t1jd_k$ = function (random) {
    return getRandomItem(this.categories_1, random, VOID, VOID, SelectCategoryEvent$getCategory$lambda).get_item_woo5lo_k$();
  };
  function get_$stableprop_19() {
    return 8;
  }
  function SkipQuestionEvent(questions) {
    Event.call(this);
    this.questions_1 = questions;
    this.$stable_2 = 8;
  }
  protoOf(SkipQuestionEvent).get_questions_kyknz0_k$ = function () {
    return this.questions_1;
  };
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function _get_events__f13j82($this) {
    return $this.events_1;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function _get_description__4f1tkb($this) {
    return $this.description_1;
  }
  function get_$stableprop_20() {
    return 8;
  }
  function GameModifier$onEvent$lambda($instance, $event) {
    return function (handlers) {
      var tmp0_iterator = handlers.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.minutiae.game.modifier.GameModifier.onEvent.<anonymous>.<anonymous>' call
        element($instance, $event);
      }
      return Unit_getInstance();
    };
  }
  function GameModifier$describe$composable$lambda($tmp0_rcvr, $data, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.describe$composable_x59bb3_k$($data, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function GameModifier(name, value, weight, events, data, description) {
    illegalDecoyCallException('<init>');
  }
  protoOf(GameModifier).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(GameModifier).onEvent_hogejy_k$ = function (instance, event) {
    forEachMatching(this.events_1, event, GameModifier$onEvent$lambda(instance, event));
  };
  protoOf(GameModifier).getName_vijop9_k$ = function (data) {
    return this.name_1(data);
  };
  protoOf(GameModifier).describe_7nwn0t_k$ = function (data) {
    illegalDecoyCallException('describe');
  };
  protoOf(GameModifier).getInstance_rhh4hh_k$ = function () {
    return new GameModifierInstance(this, this.value_1, mutableStateOf(this.data_1()));
  };
  function GameModifier(name, value, weight, events, data, description) {
    this.name_1 = name;
    this.value_1 = value;
    this.weight_1 = weight;
    this.events_1 = events;
    this.data_1 = data;
    this.description_1 = description;
    this.$stable_1 = 8;
  }
  protoOf(GameModifier).describe$composable_x59bb3_k$ = function (data, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2033195763);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(data) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2033195763, $dirty, -1, 'com.minutiae.game.modifier.GameModifier.describe$composable (GameModifier.kt:26)');
      }
      this.description_1(data, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(GameModifier$describe$composable$lambda(this, data, $changed));
    }
  };
  function _set_data__9licbx($this, _set____db54di) {
    var this_0 = $this.data$delegate_1;
    data$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_data__d5abxd_0($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.data$delegate_1;
    data$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function Render($this, buttons) {
    illegalDecoyCallException('Render');
  }
  function ModifierButton($this, text, onClick) {
    illegalDecoyCallException('ModifierButton');
  }
  function get_$stableprop_21() {
    return 8;
  }
  function Render$composable($this, buttons, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(181904235);
    if (isTraceInProgress()) {
      traceEventStart(181904235, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.Render$composable (GameModifierInstance.kt:37)');
    }
    var isDescriptive$delegate = mutableStateOf(false);
    $composer_0.startReplaceableGroup_ip860b_k$(-1182031205);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    var invalid = $composer_0.changed_ga7h3f_k$(isDescriptive$delegate);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>' call
      var value = GameModifierInstance$Render$composable$lambda(isDescriptive$delegate);
      this_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -71747677, true, GameModifierInstance$Render$composable$lambda_0($this, isDescriptive$delegate, buttons));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_2;
    if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>' call
      var value_0 = ComposableLambda$invoke$ref_54(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value_0);
      tmp_2 = value_0;
    } else {
      tmp_2 = it_0;
    }
    var tmp_3 = tmp_2;
    var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    Div$composable(tmp0_group, tmp0, $composer_0, 48, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(GameModifierInstance$Render$composable$lambda_1($this, buttons, $changed));
    }
  }
  function ModifierButton$composable($this, text, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1600694730);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1600694730, $dirty, -1, 'com.minutiae.game.modifier.GameModifierInstance.ModifierButton$composable (GameModifierInstance.kt:75)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1511667209);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.modifier.GameModifierInstance.ModifierButton$composable.<anonymous>' call
        var value = GameModifierInstance$ModifierButton$composable$lambda(onClick);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.minutiae.game.modifier.GameModifierInstance.ModifierButton$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 84063231, true, GameModifierInstance$ModifierButton$composable$lambda_0(text));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.minutiae.game.modifier.GameModifierInstance.ModifierButton$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_56(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      StandardButton$composable(tmp0_group, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(GameModifierInstance$ModifierButton$composable$lambda_1($this, text, onClick, $changed));
    }
  }
  function Render$composable$lambda($isDescriptive$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isDescriptive', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isDescriptive$delegate.get_value_j01efc_k$();
  }
  function Render$composable$lambda_0($isDescriptive$delegate, value) {
    getLocalDelegateReference('isDescriptive', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $isDescriptive$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function GameModifierInstance$renderInShop$composable$lambda$lambda($instance, this$0, $shopInstance) {
    return function () {
      var tmp;
      if ($instance.buyModifier_5hy493_k$(this$0)) {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var this_0 = $shopInstance.get_modifiers_mxb6zx_k$();
        var destination = ArrayList_init_$Create$_0();
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.minutiae.game.modifier.GameModifierInstance.renderInShop$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(element === this$0)) {
            destination.add_utx5q5_k$(element);
          }
        }
        $shopInstance.set_modifiers_r3va19_k$(destination);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$renderInShop$composable$lambda(this$0, $instance, $shopInstance) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(411226770, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.renderInShop$composable.<anonymous> (GameModifierInstance.kt:28)');
        }
        ModifierButton$composable(this$0, 'Buy', GameModifierInstance$renderInShop$composable$lambda$lambda($instance, this$0, $shopInstance), $composer_0, 518);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function GameModifierInstance$renderInShop$composable$lambda_0($tmp0_rcvr, $instance, $shopInstance, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.renderInShop$composable_bqwmcq_k$($instance, $shopInstance, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$Render$composable$lambda$lambda($isDescriptive$delegate) {
    return function (it) {
      Render$composable$lambda_0($isDescriptive$delegate, !Render$composable$lambda($isDescriptive$delegate));
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$Render$composable$lambda($isDescriptive$delegate) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$([get_Styles().get_modifier_t1pq5c_k$()]);
      $this$Div.onClick_q9cds6_k$(GameModifierInstance$Render$composable$lambda$lambda($isDescriptive$delegate));
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$Render$composable$lambda$lambda_0($this$StyledInlineText) {
    $this$StyledInlineText.classes_ayghm2_k$([get_Styles().get_modifierName_5l9rcl_k$()]);
    return Unit_getInstance();
  }
  function GameModifierInstance$Render$composable$lambda$lambda_1($this$Span) {
    $this$Span.classes_ayghm2_k$([get_Styles().get_simpleText_r6j5vs_k$()]);
    $this$Span.style_xwwy6r_k$(GameModifierInstance$Render$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function GameModifierInstance$Render$composable$lambda$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Inline' call
    Companion_getInstance_1();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'inline');
    return Unit_getInstance();
  }
  function GameModifierInstance$Render$composable$lambda$lambda$lambda_0($this$Span) {
    $this$Span.style_xwwy6r_k$(GameModifierInstance$Render$composable$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function GameModifierInstance$Render$composable$lambda$lambda$lambda$lambda($this$style) {
    // Inline function 'org.jetbrains.compose.web.css.Color.darkgreen' call
    Color_getInstance();
    var tmp$ret$0 = Color('darkgreen');
    color($this$style, tmp$ret$0);
    return Unit_getInstance();
  }
  function GameModifierInstance$Render$composable$lambda$lambda$lambda_1(this$0) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(831508579, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous> (GameModifierInstance.kt:52)');
        }
        Text$composable('$' + this$0.value_1, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GameModifierInstance$Render$composable$lambda$lambda_2(this$0) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1802169349, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous> (GameModifierInstance.kt:51)');
        }
        Text$composable('Value: ', $composer_0, 6);
        $composer_0.startReplaceableGroup_ip860b_k$(-1402548227);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = GameModifierInstance$Render$composable$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 831508579, true, GameModifierInstance$Render$composable$lambda$lambda$lambda_1(this$0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_51(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Span$composable(tmp0_group, tmp0, $composer_0, 54, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GameModifierInstance$Render$composable$lambda$lambda_3($this$Div) {
    $this$Div.classes_ayghm2_k$([get_Styles().get_modifierButtons_efr6tb_k$()]);
    return Unit_getInstance();
  }
  function GameModifierInstance$Render$composable$lambda$lambda_4($buttons) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(440710852, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous> (GameModifierInstance.kt:58)');
        }
        $buttons($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GameModifierInstance$Render$composable$lambda_0(this$0, $isDescriptive$delegate, $buttons) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-71747677, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous> (GameModifierInstance.kt:44)');
        }
        var tmp_0 = this$0.modifier_1.getName_vijop9_k$(_get_data__d5abxd_0(this$0));
        $composer_0.startReplaceableGroup_ip860b_k$(-389730852);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = GameModifierInstance$Render$composable$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        StyledInlineText$composable(tmp_0, tmp0_group, $composer_0, 48, 0);
        $composer_0.startReplaceableGroup_ip860b_k$(-389730802);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = GameModifierInstance$Render$composable$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 1802169349, true, GameModifierInstance$Render$composable$lambda$lambda_2(this$0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_52(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Span$composable(tmp1_group, tmp0, $composer_0, 54, 0);
        if (Render$composable$lambda($isDescriptive$delegate)) {
          $composer_0.startReplaceableGroup_ip860b_k$(-389730483);
          this$0.modifier_1.describe$composable_x59bb3_k$(_get_data__d5abxd_0(this$0), $composer_0, 0);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        } else {
          $composer_0.startReplaceableGroup_ip860b_k$(-389730451);
          SimpleText$composable('Tap for Info', $composer_0, 6);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-389730407);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (false ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = GameModifierInstance$Render$composable$lambda$lambda_3;
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp2_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_10 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_10, 440710852, true, GameModifierInstance$Render$composable$lambda$lambda_4($buttons));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_11;
        if (invalid_0 ? true : it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.minutiae.game.modifier.GameModifierInstance.Render$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = ComposableLambda$invoke$ref_53(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_3);
          tmp_11 = value_3;
        } else {
          tmp_11 = it_3;
        }
        var tmp_12 = tmp_11;
        var tmp0_0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp2_group, tmp0_0, $composer_0, 54, 0);
        var tmp_13;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_13 = Unit_getInstance();
        }
        tmp = tmp_13;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GameModifierInstance$Render$composable$lambda_1($tmp1_rcvr, $buttons, $$changed) {
    return function ($composer, $force) {
      Render$composable($tmp1_rcvr, $buttons, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$renderInContainer$composable$lambda$lambda($instance, this$0) {
    return function () {
      $instance.moveModifier_8985d8_k$(this$0, -1);
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$renderInContainer$composable$lambda$lambda_0($instance, this$0) {
    return function () {
      $instance.sellModifier_ottafp_k$(this$0);
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$renderInContainer$composable$lambda$lambda_1($instance, this$0) {
    return function () {
      $instance.moveModifier_8985d8_k$(this$0, 1);
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$renderInContainer$composable$lambda(this$0, $instance) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-324185150, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.renderInContainer$composable.<anonymous> (GameModifierInstance.kt:65)');
        }
        ModifierButton$composable(this$0, '\u2190', GameModifierInstance$renderInContainer$composable$lambda$lambda($instance, this$0), $composer_0, 518);
        ModifierButton$composable(this$0, 'Sell', GameModifierInstance$renderInContainer$composable$lambda$lambda_0($instance, this$0), $composer_0, 518);
        ModifierButton$composable(this$0, '\u2192', GameModifierInstance$renderInContainer$composable$lambda$lambda_1($instance, this$0), $composer_0, 518);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function GameModifierInstance$renderInContainer$composable$lambda_0($tmp0_rcvr, $instance, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.renderInContainer$composable_556pkp_k$($instance, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$ModifierButton$composable$lambda$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$ModifierButton$composable$lambda($onClick) {
    return function ($this$StandardButton) {
      $this$StandardButton.classes_ayghm2_k$([get_Styles().get_modifierButton_k5md4i_k$()]);
      $this$StandardButton.onClick_q9cds6_k$(GameModifierInstance$ModifierButton$composable$lambda$lambda($onClick));
      return Unit_getInstance();
    };
  }
  function GameModifierInstance$ModifierButton$composable$lambda_0($text) {
    return function ($this$StandardButton, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(84063231, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.ModifierButton$composable.<anonymous> (GameModifierInstance.kt:79)');
        }
        Text$composable($text, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GameModifierInstance$ModifierButton$composable$lambda_1($tmp1_rcvr, $text, $onClick, $$changed) {
    return function ($composer, $force) {
      ModifierButton$composable($tmp1_rcvr, $text, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function GameModifierInstance(modifier, value, dataState) {
    this.modifier_1 = modifier;
    this.value_1 = value;
    this.data$delegate_1 = dataState;
    this.$stable_1 = 8;
  }
  protoOf(GameModifierInstance).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(GameModifierInstance).set_value_h293uc_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(GameModifierInstance).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(GameModifierInstance).onEvent_hdbvys_k$ = function (event) {
    this.modifier_1.onEvent_hogejy_k$(this, event);
  };
  protoOf(GameModifierInstance).set_to7k83_k$ = function (key, value) {
    // Inline function 'kotlin.also' call
    var this_0 = toMutableMap(_get_data__d5abxd_0(this));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.minutiae.game.modifier.GameModifierInstance.set.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this_0.put_4fpzoq_k$(key, value);
    _set_data__9licbx(this, this_0);
  };
  protoOf(GameModifierInstance).get_1z5p00_k$ = function (key) {
    var tmp = _get_data__d5abxd_0(this).get_wei43m_k$(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : null;
  };
  protoOf(GameModifierInstance).renderInShop_xs7un4_k$ = function (instance, shopInstance) {
    illegalDecoyCallException('renderInShop');
  };
  protoOf(GameModifierInstance).renderInContainer_8j866d_k$ = function (instance) {
    illegalDecoyCallException('renderInContainer');
  };
  protoOf(GameModifierInstance).renderInShop$composable_bqwmcq_k$ = function (instance, shopInstance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(480015709);
    if (isTraceInProgress()) {
      traceEventStart(480015709, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.renderInShop$composable (GameModifierInstance.kt:26)');
    }
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.minutiae.game.modifier.GameModifierInstance.renderInShop$composable.<anonymous>' call
    var tmp = $composer_0;
    var dispatchReceiver = composableLambda(tmp, 411226770, true, GameModifierInstance$renderInShop$composable$lambda(this, instance, shopInstance));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.minutiae.game.modifier.GameModifierInstance.renderInShop$composable.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_50(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    Render$composable(this, tmp0, $composer_0, 70);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(GameModifierInstance$renderInShop$composable$lambda_0(this, instance, shopInstance, $changed));
    }
  };
  protoOf(GameModifierInstance).renderInContainer$composable_556pkp_k$ = function (instance, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-893545242);
    if (isTraceInProgress()) {
      traceEventStart(-893545242, $changed, -1, 'com.minutiae.game.modifier.GameModifierInstance.renderInContainer$composable (GameModifierInstance.kt:63)');
    }
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.minutiae.game.modifier.GameModifierInstance.renderInContainer$composable.<anonymous>' call
    var tmp = $composer_0;
    var dispatchReceiver = composableLambda(tmp, -324185150, true, GameModifierInstance$renderInContainer$composable$lambda(this, instance));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.minutiae.game.modifier.GameModifierInstance.renderInContainer$composable.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_55(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    Render$composable(this, tmp0, $composer_0, 70);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(GameModifierInstance$renderInContainer$composable$lambda_0(this, instance, $changed));
    }
  };
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return _get_data__d5abxd_0(receiver);
    }, function (receiver, value) {
      return _set_data__9licbx(receiver, value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return _get_data__d5abxd_0(receiver);
    }, function (receiver, value) {
      return _set_data__9licbx(receiver, value);
    });
  }
  function _get_items__fzd5gv($this) {
    return $this.items_1;
  }
  function modifier($this, name, value, weight, block) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    var this_0 = new GameModifierBuilder(name, value, weight);
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.getModifier_o6o0ul_k$();
    var tmp2_also_receiver = $this.items_1;
    // Inline function 'kotlin.contracts.contract' call
    modifier$add(tmp2_also_receiver, this_1);
    return this_1;
  }
  function get_$stableprop_22() {
    return 8;
  }
  function modifier$add(receiver, p0) {
    receiver.add_utx5q5_k$(p0);
  }
  function GameModifiers$addBlue$lambda($this$modifier) {
    var tmp = getKClass(ScoreQuestionEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$addBlue$lambda$lambda);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  function GameModifiers$addBlue$lambda$lambda($this$invoke, it) {
    it.set_time_7don5u_k$(it.get_time_wouyhi_k$() + 5 | 0);
    return Unit_getInstance();
  }
  function GameModifiers$addRed$lambda($this$modifier) {
    var tmp = getKClass(ScoreQuestionEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$addRed$lambda$lambda);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_2_r8sbbo_1);
    return Unit_getInstance();
  }
  function GameModifiers$addRed$lambda$lambda($this$invoke, it) {
    it.set_guesses_512lpc_k$(it.get_guesses_7duuvw_k$() + 3 | 0);
    return Unit_getInstance();
  }
  function GameModifiers$addGreen$lambda($this$modifier) {
    var tmp = getKClass(ScoreQuestionEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$addGreen$lambda$lambda);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_3_r8sbbn_1);
    return Unit_getInstance();
  }
  function GameModifiers$addGreen$lambda$lambda($this$invoke, it) {
    it.set_difficulty_jdwto0_k$(it.get_difficulty_a2zhac_k$() + 2 | 0);
    return Unit_getInstance();
  }
  function GameModifiers$doubleScore$lambda($this$modifier) {
    var tmp = getKClass(ScoreQuestionEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$doubleScore$lambda$lambda);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_4_r8sbbm_1);
    return Unit_getInstance();
  }
  function GameModifiers$doubleScore$lambda$lambda($this$invoke, it) {
    it.set_additional_ddcrfo_k$(imul(it.get_additional_iwy374_k$(), 2));
    return Unit_getInstance();
  }
  function GameModifiers$tripleScore$lambda($this$modifier) {
    var tmp = getKClass(ScoreQuestionEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$tripleScore$lambda$lambda);
    $this$modifier.data_q2pbqo_k$(GameModifiers$tripleScore$lambda$lambda_0);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_5_r8sbbl_1);
    return Unit_getInstance();
  }
  function GameModifiers$tripleScore$lambda$lambda($this$invoke, it) {
    it.set_additional_ddcrfo_k$(imul(it.get_additional_iwy374_k$(), 3));
    var newUses = ensureNotNull($this$invoke.get_1z5p00_k$('uses')) - 1 | 0;
    if (newUses === 0) {
      var tmp1_safe_receiver = get_gameInstance();
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.removeModifier_ufqx6v_k$($this$invoke);
      }
    } else {
      $this$invoke.set_to7k83_k$('uses', newUses);
    }
    return Unit_getInstance();
  }
  function GameModifiers$tripleScore$lambda$lambda_0() {
    return mapOf(to('uses', 10));
  }
  function GameModifiers$stacked$lambda($this$modifier) {
    var tmp = getKClass(ScoreQuestionEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$stacked$lambda$lambda);
    var tmp_0 = getKClass(SkipQuestionEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp_0, GameModifiers$stacked$lambda$lambda_0);
    $this$modifier.data_q2pbqo_k$(GameModifiers$stacked$lambda$lambda_1);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_6_r8sbbk_1);
    return Unit_getInstance();
  }
  function GameModifiers$stacked$lambda$lambda($this$invoke, it) {
    var boost = ensureNotNull($this$invoke.get_1z5p00_k$('points'));
    it.set_time_7don5u_k$(it.get_time_wouyhi_k$() + boost | 0);
    $this$invoke.set_to7k83_k$('points', boost + it.get_question_jy1o6n_k$().get_question_jy1o6n_k$().get_difficulty_a2zhac_k$().get_multiplier_qxufe_k$() | 0);
    return Unit_getInstance();
  }
  function GameModifiers$stacked$lambda$lambda_0($this$invoke, it) {
    // Inline function 'kotlin.math.max' call
    var a = ensureNotNull($this$invoke.get_1z5p00_k$('points')) - 2 | 0;
    var tmp$ret$0 = Math.max(a, 0);
    $this$invoke.set_to7k83_k$('points', tmp$ret$0);
    return Unit_getInstance();
  }
  function GameModifiers$stacked$lambda$lambda_1() {
    return mapOf(to('points', 0));
  }
  function GameModifiers$forgiveness$lambda($this$modifier) {
    var tmp = getKClass(RunInfoEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$forgiveness$lambda$lambda);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_7_r8sbbj_1);
    return Unit_getInstance();
  }
  function GameModifiers$forgiveness$lambda$lambda($this$invoke, it) {
    it.set_questions_xz5lpk_k$(it.get_questions_kyknz0_k$() + 2 | 0);
    it.set_skips_tad5gx_k$(it.get_skips_iykc6j_k$() + 1 | 0);
    return Unit_getInstance();
  }
  function GameModifiers$copycat$lambda($this$modifier) {
    var tmp = getKClass(Event);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$copycat$lambda$lambda);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_8_r8sbbi_1);
    return Unit_getInstance();
  }
  function GameModifiers$copycat$lambda$lambda($this$invoke, event) {
    var modifiers = ensureNotNull(get_gameInstance()).get_modifiers_mxb6zx_k$();
    var index = modifiers.indexOf_si1fv9_k$($this$invoke);
    var tmp0_safe_receiver = getOrNull(modifiers, index + 1 | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'com.minutiae.game.modifier.GameModifiers.copycat.<anonymous>.<anonymous>.<anonymous>' call
      if (!equals(tmp0_safe_receiver.get_modifier_t1pq5c_k$(), GameModifiers_getInstance().copydog_1)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.onEvent_hdbvys_k$(event);
    }
    return Unit_getInstance();
  }
  function GameModifiers$copydog$lambda($this$modifier) {
    var tmp = getKClass(Event);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$copydog$lambda$lambda);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_9_r8sbbh_1);
    return Unit_getInstance();
  }
  function GameModifiers$copydog$lambda$lambda($this$invoke, event) {
    var modifiers = ensureNotNull(get_gameInstance()).get_modifiers_mxb6zx_k$();
    var index = modifiers.indexOf_si1fv9_k$($this$invoke);
    var tmp0_safe_receiver = getOrNull(modifiers, index - 1 | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'com.minutiae.game.modifier.GameModifiers.copydog.<anonymous>.<anonymous>.<anonymous>' call
      if (!equals(tmp0_safe_receiver.get_modifier_t1pq5c_k$(), GameModifiers_getInstance().copycat_1)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.onEvent_hdbvys_k$(event);
    }
    return Unit_getInstance();
  }
  function GameModifiers$lambda($this$modifier) {
    var tmp = getKClass(SelectCategoryEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$lambda$lambda);
    $this$modifier.data_q2pbqo_k$(GameModifiers$lambda$lambda_0);
    $this$modifier.name_gvalz6_k$(GameModifiers$lambda$lambda_1);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_10_7sywo5__1);
    return Unit_getInstance();
  }
  function GameModifiers$lambda$lambda($this$invoke, event) {
    var category = ensureNotNull($this$invoke.get_1z5p00_k$('category'));
    // Inline function 'kotlin.collections.find' call
    var this_0 = event.get_categories_19ns11_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.minutiae.game.modifier.GameModifiers.<anonymous>.<anonymous>.<anonymous>' call
        if (element.get_item_woo5lo_k$() === category) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.set_weight_l75ca5_k$(tmp0_safe_receiver.get_weight_lbhkzl_k$() + 10.0);
    }
    return Unit_getInstance();
  }
  function GameModifiers$lambda$lambda_0() {
    // Inline function 'kotlin.collections.random' call
    var this_0 = get_entries();
    var tmp$ret$0 = random(this_0, Default_getInstance());
    return mapOf(to('category', tmp$ret$0));
  }
  function GameModifiers$lambda$lambda_1(it) {
    var tmp = it.get_wei43m_k$('category');
    return 'Commonality [' + (tmp instanceof Category ? tmp : THROW_CCE()).get_displayName_sscnb0_k$() + ']';
  }
  function GameModifiers$lambda_0($this$modifier) {
    var tmp = getKClass(ScoreQuestionEvent);
    $this$modifier.invoke_wdqtk1_k$(tmp, GameModifiers$lambda$lambda_2);
    $this$modifier.data_q2pbqo_k$(GameModifiers$lambda$lambda_3);
    $this$modifier.name_gvalz6_k$(GameModifiers$lambda$lambda_4);
    $this$modifier.describe$composable_njlxof_k$(ComposableSingletons$GameModifiersKt_getInstance().lambda_11_7sywo6__1);
    return Unit_getInstance();
  }
  function GameModifiers$lambda$lambda_2($this$invoke, it) {
    if (it.get_question_jy1o6n_k$().get_question_jy1o6n_k$().get_category_uyv41l_k$() === ensureNotNull($this$invoke.get_1z5p00_k$('category'))) {
      it.set_additional_ddcrfo_k$(imul(it.get_additional_iwy374_k$(), 2));
    }
    return Unit_getInstance();
  }
  function GameModifiers$lambda$lambda_3() {
    // Inline function 'kotlin.collections.random' call
    var this_0 = get_entries();
    var tmp$ret$0 = random(this_0, Default_getInstance());
    return mapOf(to('category', tmp$ret$0));
  }
  function GameModifiers$lambda$lambda_4(it) {
    var tmp = it.get_wei43m_k$('category');
    return 'Boost [' + (tmp instanceof Category ? tmp : THROW_CCE()).get_displayName_sscnb0_k$() + ']';
  }
  function GameModifiers() {
    GameModifiers_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.items_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    tmp_0.addBlue_1 = modifier(this, 'Blue', 2, 5.0, GameModifiers$addBlue$lambda);
    var tmp_1 = this;
    tmp_1.addRed_1 = modifier(this, 'Red', 2, 5.0, GameModifiers$addRed$lambda);
    var tmp_2 = this;
    tmp_2.addGreen_1 = modifier(this, 'Green', 2, 5.0, GameModifiers$addGreen$lambda);
    var tmp_3 = this;
    tmp_3.doubleScore_1 = modifier(this, 'Double Score', 4, 3.0, GameModifiers$doubleScore$lambda);
    var tmp_4 = this;
    tmp_4.tripleScore_1 = modifier(this, 'Triple Score', 8, 1.0, GameModifiers$tripleScore$lambda);
    var tmp_5 = this;
    tmp_5.stacked_1 = modifier(this, 'Stacked', 6, 3.0, GameModifiers$stacked$lambda);
    var tmp_6 = this;
    tmp_6.forgiveness_1 = modifier(this, 'Forgiveness', 5, 5.0, GameModifiers$forgiveness$lambda);
    var tmp_7 = this;
    tmp_7.copycat_1 = modifier(this, 'Copycat', 6, 2.0, GameModifiers$copycat$lambda);
    var tmp_8 = this;
    tmp_8.copydog_1 = modifier(this, 'Copydog', 6, 2.0, GameModifiers$copydog$lambda);
    modifier(this, 'Commonality', 4, 3.0, GameModifiers$lambda);
    modifier(this, 'Boost', 4, 3.0, GameModifiers$lambda_0);
    this.$stable_1 = 8;
  }
  protoOf(GameModifiers).get_addBlue_hqlky6_k$ = function () {
    return this.addBlue_1;
  };
  protoOf(GameModifiers).get_addRed_avuh4p_k$ = function () {
    return this.addRed_1;
  };
  protoOf(GameModifiers).get_addGreen_if5vhn_k$ = function () {
    return this.addGreen_1;
  };
  protoOf(GameModifiers).get_doubleScore_d1uqeg_k$ = function () {
    return this.doubleScore_1;
  };
  protoOf(GameModifiers).get_tripleScore_k6yf11_k$ = function () {
    return this.tripleScore_1;
  };
  protoOf(GameModifiers).get_stacked_u492v6_k$ = function () {
    return this.stacked_1;
  };
  protoOf(GameModifiers).get_forgiveness_ggodko_k$ = function () {
    return this.forgiveness_1;
  };
  protoOf(GameModifiers).get_copycat_h19a3c_k$ = function () {
    return this.copycat_1;
  };
  protoOf(GameModifiers).get_copydog_h19b5q_k$ = function () {
    return this.copydog_1;
  };
  protoOf(GameModifiers).iterator_jk1svi_k$ = function () {
    return this.items_1.iterator_jk1svi_k$();
  };
  var GameModifiers_instance;
  function GameModifiers_getInstance() {
    if (GameModifiers_instance == null)
      new GameModifiers();
    return GameModifiers_instance;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function _get_weight__cvworx($this) {
    return $this.weight_1;
  }
  function _get_events__f13j82_0($this) {
    return $this.events_1;
  }
  function _set_name__9r0564($this, _set____db54di) {
    $this.name_1 = _set____db54di;
  }
  function _get_name__das4rk_0($this) {
    return $this.name_1;
  }
  function _set_description__ypfzw7($this, _set____db54di) {
    illegalDecoyCallException('<set-description>');
  }
  function _get_description__4f1tkb_0($this) {
    return $this.description_1;
  }
  function _set_data__9licbx_0($this, _set____db54di) {
    $this.data_1 = _set____db54di;
  }
  function _get_data__d5abxd_1($this) {
    return $this.data_1;
  }
  function get_$stableprop_23() {
    return 8;
  }
  function $set_description$$composable_j0kmme($this, set__$_ezb9bk) {
    $this.description_1 = set__$_ezb9bk;
  }
  function GameModifierBuilder$name$lambda($name) {
    return function (it) {
      return $name;
    };
  }
  function GameModifierBuilder$data$lambda() {
    return emptyMap();
  }
  function GameModifierBuilder(name, value, weight) {
    this.value_1 = value;
    this.weight_1 = weight;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.events_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.name_1 = GameModifierBuilder$name$lambda(name);
    this.description_1 = ComposableSingletons$GameModifiersKt_getInstance().lambda_12_7sywo7__1;
    var tmp_1 = this;
    tmp_1.data_1 = GameModifierBuilder$data$lambda;
    this.$stable_1 = 8;
  }
  protoOf(GameModifierBuilder).name_gvalz6_k$ = function (block) {
    this.name_1 = block;
  };
  protoOf(GameModifierBuilder).describe_ujqb1y_k$ = function (block) {
    illegalDecoyCallException('describe');
  };
  protoOf(GameModifierBuilder).data_q2pbqo_k$ = function (block) {
    this.data_1 = block;
  };
  protoOf(GameModifierBuilder).getModifier_o6o0ul_k$ = function () {
    return new GameModifier(this.name_1, this.value_1, this.weight_1, this.events_1, this.data_1, this.description_1);
  };
  protoOf(GameModifierBuilder).set_a3467b_k$ = function (eventClass, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.events_1;
    var value_0 = this_0.get_wei43m_k$(eventClass);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$_0();
      this_0.put_4fpzoq_k$(eventClass, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp_0 = tmp;
    tmp_0.add_utx5q5_k$(typeof value === 'function' ? value : THROW_CCE());
  };
  protoOf(GameModifierBuilder).invoke_wdqtk1_k$ = function (_this__u8e3s4, value) {
    this.set_a3467b_k$(_this__u8e3s4, value);
  };
  protoOf(GameModifierBuilder).describe$composable_njlxof_k$ = function (block) {
    $set_description$$composable_j0kmme(this, block);
  };
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_1$lambda_gfb40(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-818604389, $changed, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-1.<anonymous> (GameModifiers.kt:17)');
      }
      SimpleText$composable('Add 5 to blue when answers are scored.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_2$lambda_ta1s67(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(431291304, $changed, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-2.<anonymous> (GameModifiers.kt:24)');
      }
      SimpleText$composable('Add 3 to red when answers are scored.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_3$lambda_cxfsqq(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-405755658, $changed, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-3.<anonymous> (GameModifiers.kt:32)');
      }
      SimpleText$composable('Add 2 to green when answers are scored.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_4$lambda_fw6obh(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-640935627, $changed, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-4.<anonymous> (GameModifiers.kt:39)');
      }
      SimpleText$composable('Answers are worth 2x as many points.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_5$lambda_qbawlg(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1720141570, $dirty, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-5.<anonymous> (GameModifiers.kt:58)');
      }
      SimpleText$composable('Answers are worth 3x as many points.', $composer_0, 6);
      SimpleText$composable('Disappears after ' + toString(it.get_wei43m_k$('uses')) + ' uses.', $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_6$lambda_2ibkgr(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(353364879, $dirty, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-6.<anonymous> (GameModifiers.kt:77)');
      }
      SimpleText$composable('Gives ' + toString(it.get_wei43m_k$('points')) + ' additional blue point(s).', $composer_0, 0);
      SimpleText$composable('Skipping a question decreases this by 2.', $composer_0, 6);
      SimpleText$composable('Answering a question increases this by its difficulty value.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_7$lambda_vby1iy(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-69383227, $changed, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-7.<anonymous> (GameModifiers.kt:90)');
      }
      SimpleText$composable('Grants 2 additional questions', $composer_0, 6);
      SimpleText$composable('Grants 1 additional skip', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_8$lambda_avjjdz(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1652377013, $changed, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-8.<anonymous> (GameModifiers.kt:103)');
      }
      SimpleText$composable('Copy the ability of the modifier to the right', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_9$lambda_hy2xo8(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(543040271, $changed, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-9.<anonymous> (GameModifiers.kt:115)');
      }
      SimpleText$composable('Copy the ability of the modifier to the left', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_10$lambda_ikbnly(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-165801221, $dirty, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-10.<anonymous> (GameModifiers.kt:128)');
      }
      var tmp = it.get_wei43m_k$('category');
      SimpleText$composable((tmp instanceof Category ? tmp : THROW_CCE()).get_displayName_sscnb0_k$() + ' questions are more common.', $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_11$lambda_nn5xaz(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(429888676, $dirty, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-11.<anonymous> (GameModifiers.kt:138)');
      }
      var tmp = it.get_wei43m_k$('category');
      SimpleText$composable((tmp instanceof Category ? tmp : THROW_CCE()).get_displayName_sscnb0_k$() + ' questions are worth 2x more.', $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GameModifiersKt$lambda_12$lambda_56gjr8(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(917174898, $changed, -1, 'com.minutiae.game.modifier.ComposableSingletons$GameModifiersKt.lambda-12.<anonymous> (GameModifiers.kt:162)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$GameModifiersKt() {
    ComposableSingletons$GameModifiersKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-818604389, false, ComposableSingletons$GameModifiersKt$lambda_1$lambda_gfb40));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(431291304, false, ComposableSingletons$GameModifiersKt$lambda_2$lambda_ta1s67));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(-405755658, false, ComposableSingletons$GameModifiersKt$lambda_3$lambda_cxfsqq));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(-640935627, false, ComposableSingletons$GameModifiersKt$lambda_4$lambda_fw6obh));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(1720141570, false, ComposableSingletons$GameModifiersKt$lambda_5$lambda_qbawlg));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(353364879, false, ComposableSingletons$GameModifiersKt$lambda_6$lambda_2ibkgr));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_63(composableLambdaInstance(-69383227, false, ComposableSingletons$GameModifiersKt$lambda_7$lambda_vby1iy));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(1652377013, false, ComposableSingletons$GameModifiersKt$lambda_8$lambda_avjjdz));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(543040271, false, ComposableSingletons$GameModifiersKt$lambda_9$lambda_hy2xo8));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(-165801221, false, ComposableSingletons$GameModifiersKt$lambda_10$lambda_ikbnly));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(429888676, false, ComposableSingletons$GameModifiersKt$lambda_11$lambda_nn5xaz));
    var tmp_10 = this;
    tmp_10.lambda_12_7sywo7__1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(917174898, false, ComposableSingletons$GameModifiersKt$lambda_12$lambda_56gjr8));
  }
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_7_bzdzzu_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_8_bzdzzv_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_9_bzdzzw_k$ = function () {
    return this.lambda_9_r8sbbh_1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_10_gbhpvg_k$ = function () {
    return this.lambda_10_7sywo5__1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_11_gbhpvh_k$ = function () {
    return this.lambda_11_7sywo6__1;
  };
  protoOf(ComposableSingletons$GameModifiersKt).get_lambda_12_gbhpvi_k$ = function () {
    return this.lambda_12_7sywo7__1;
  };
  var ComposableSingletons$GameModifiersKt_instance;
  function ComposableSingletons$GameModifiersKt_getInstance() {
    if (ComposableSingletons$GameModifiersKt_instance == null)
      new ComposableSingletons$GameModifiersKt();
    return ComposableSingletons$GameModifiersKt_instance;
  }
  function get_$stableprop_24() {
    return 8;
  }
  function Themes() {
    Themes_instance = this;
    this.themes_1 = listOf(new Theme(new Shades(new HEX('f7f4ee'), new HEX('efeadc'), new HEX('dfd4b9'), new HEX('cfbf96'), new HEX('bfa973'), new HEX('af9450'), new HEX('8c7640'), new HEX('695930'), new HEX('463b20'), new HEX('231e10'), new HEX('110f08')), new Shades(new HEX('f7f3ed'), new HEX('efe7dc'), new HEX('dfd0b9'), new HEX('d0b895'), new HEX('c0a172'), new HEX('b0894f'), new HEX('8d6e3f'), new HEX('6a522f'), new HEX('463720'), new HEX('231b10'), new HEX('120e08')), new Shades(new HEX('f7f4ee'), new HEX('eee8dd'), new HEX('ddd1bb'), new HEX('cdba98'), new HEX('bca376'), new HEX('ab8d54'), new HEX('897043'), new HEX('675432'), new HEX('443822'), new HEX('221c11'), new HEX('110e08')), new Shades(new HEX('eef7f3'), new HEX('ddeee7'), new HEX('bbddcf'), new HEX('98cdb8'), new HEX('76bca0'), new HEX('54ab88'), new HEX('43896d'), new HEX('326752'), new HEX('224436'), new HEX('11221b'), new HEX('08110e')), new Shades(new HEX('eef4f7'), new HEX('ddeaee'), new HEX('bad4de'), new HEX('98bfcd'), new HEX('75aabd'), new HEX('5394ac'), new HEX('42778a'), new HEX('325967'), new HEX('213b45'), new HEX('111e22'), new HEX('080f11'))));
    this.$stable_1 = 8;
  }
  protoOf(Themes).get_themes_jxxo0j_k$ = function () {
    return this.themes_1;
  };
  var Themes_instance;
  function Themes_getInstance() {
    if (Themes_instance == null)
      new Themes();
    return Themes_instance;
  }
  function get_$stableprop_25() {
    return 0;
  }
  function Theme(text, background, primary, secondary, accent) {
    this.text_1 = text;
    this.background_1 = background;
    this.primary_1 = primary;
    this.secondary_1 = secondary;
    this.accent_1 = accent;
    this.$stable_1 = 0;
  }
  protoOf(Theme).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(Theme).get_background_stpfw7_k$ = function () {
    return this.background_1;
  };
  protoOf(Theme).get_primary_3xuktj_k$ = function () {
    return this.primary_1;
  };
  protoOf(Theme).get_secondary_5095it_k$ = function () {
    return this.secondary_1;
  };
  protoOf(Theme).get_accent_avafv7_k$ = function () {
    return this.accent_1;
  };
  protoOf(Theme).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(Theme).component2_7eebsb_k$ = function () {
    return this.background_1;
  };
  protoOf(Theme).component3_7eebsa_k$ = function () {
    return this.primary_1;
  };
  protoOf(Theme).component4_7eebs9_k$ = function () {
    return this.secondary_1;
  };
  protoOf(Theme).component5_7eebs8_k$ = function () {
    return this.accent_1;
  };
  protoOf(Theme).copy_it5poa_k$ = function (text, background, primary, secondary, accent) {
    return new Theme(text, background, primary, secondary, accent);
  };
  protoOf(Theme).copy$default_5633y5_k$ = function (text, background, primary, secondary, accent, $super) {
    text = text === VOID ? this.text_1 : text;
    background = background === VOID ? this.background_1 : background;
    primary = primary === VOID ? this.primary_1 : primary;
    secondary = secondary === VOID ? this.secondary_1 : secondary;
    accent = accent === VOID ? this.accent_1 : accent;
    return $super === VOID ? this.copy_it5poa_k$(text, background, primary, secondary, accent) : $super.copy_it5poa_k$.call(this, text, background, primary, secondary, accent);
  };
  protoOf(Theme).toString = function () {
    return 'Theme(text=' + this.text_1 + ', background=' + this.background_1 + ', primary=' + this.primary_1 + ', secondary=' + this.secondary_1 + ', accent=' + this.accent_1 + ')';
  };
  protoOf(Theme).hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(result, 31) + this.background_1.hashCode() | 0;
    result = imul(result, 31) + this.primary_1.hashCode() | 0;
    result = imul(result, 31) + this.secondary_1.hashCode() | 0;
    result = imul(result, 31) + this.accent_1.hashCode() | 0;
    return result;
  };
  protoOf(Theme).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Theme))
      return false;
    var tmp0_other_with_cast = other instanceof Theme ? other : THROW_CCE();
    if (!this.text_1.equals(tmp0_other_with_cast.text_1))
      return false;
    if (!this.background_1.equals(tmp0_other_with_cast.background_1))
      return false;
    if (!this.primary_1.equals(tmp0_other_with_cast.primary_1))
      return false;
    if (!this.secondary_1.equals(tmp0_other_with_cast.secondary_1))
      return false;
    if (!this.accent_1.equals(tmp0_other_with_cast.accent_1))
      return false;
    return true;
  };
  function get_$stableprop_26() {
    return 0;
  }
  function Shades(t50, t100, t200, t300, t400, t500, t600, t700, t800, t900, t950) {
    this.t50__1 = t50;
    this.t100__1 = t100;
    this.t200__1 = t200;
    this.t300__1 = t300;
    this.t400__1 = t400;
    this.t500__1 = t500;
    this.t600__1 = t600;
    this.t700__1 = t700;
    this.t800__1 = t800;
    this.t900__1 = t900;
    this.t950__1 = t950;
    this.$stable_1 = 0;
  }
  protoOf(Shades).get_t50_18iwre_k$ = function () {
    return this.t50__1;
  };
  protoOf(Shades).get_t100_wotrgm_k$ = function () {
    return this.t100__1;
  };
  protoOf(Shades).get_t200_wots7b_k$ = function () {
    return this.t200__1;
  };
  protoOf(Shades).get_t300_wotsy0_k$ = function () {
    return this.t300__1;
  };
  protoOf(Shades).get_t400_wottop_k$ = function () {
    return this.t400__1;
  };
  protoOf(Shades).get_t500_wotufe_k$ = function () {
    return this.t500__1;
  };
  protoOf(Shades).get_t600_wotv63_k$ = function () {
    return this.t600__1;
  };
  protoOf(Shades).get_t700_wotvws_k$ = function () {
    return this.t700__1;
  };
  protoOf(Shades).get_t800_wotwnh_k$ = function () {
    return this.t800__1;
  };
  protoOf(Shades).get_t900_wotxe6_k$ = function () {
    return this.t900__1;
  };
  protoOf(Shades).get_t950_wotxih_k$ = function () {
    return this.t950__1;
  };
  protoOf(Shades).component1_7eebsc_k$ = function () {
    return this.t50__1;
  };
  protoOf(Shades).component2_7eebsb_k$ = function () {
    return this.t100__1;
  };
  protoOf(Shades).component3_7eebsa_k$ = function () {
    return this.t200__1;
  };
  protoOf(Shades).component4_7eebs9_k$ = function () {
    return this.t300__1;
  };
  protoOf(Shades).component5_7eebs8_k$ = function () {
    return this.t400__1;
  };
  protoOf(Shades).component6_7eebs7_k$ = function () {
    return this.t500__1;
  };
  protoOf(Shades).component7_7eebs6_k$ = function () {
    return this.t600__1;
  };
  protoOf(Shades).component8_7eebs5_k$ = function () {
    return this.t700__1;
  };
  protoOf(Shades).component9_7eebs4_k$ = function () {
    return this.t800__1;
  };
  protoOf(Shades).component10_gazzfo_k$ = function () {
    return this.t900__1;
  };
  protoOf(Shades).component11_gazzfn_k$ = function () {
    return this.t950__1;
  };
  protoOf(Shades).copy_m5jfch_k$ = function (t50, t100, t200, t300, t400, t500, t600, t700, t800, t900, t950) {
    return new Shades(t50, t100, t200, t300, t400, t500, t600, t700, t800, t900, t950);
  };
  protoOf(Shades).copy$default_f6fdpp_k$ = function (t50, t100, t200, t300, t400, t500, t600, t700, t800, t900, t950, $super) {
    t50 = t50 === VOID ? this.t50__1 : t50;
    t100 = t100 === VOID ? this.t100__1 : t100;
    t200 = t200 === VOID ? this.t200__1 : t200;
    t300 = t300 === VOID ? this.t300__1 : t300;
    t400 = t400 === VOID ? this.t400__1 : t400;
    t500 = t500 === VOID ? this.t500__1 : t500;
    t600 = t600 === VOID ? this.t600__1 : t600;
    t700 = t700 === VOID ? this.t700__1 : t700;
    t800 = t800 === VOID ? this.t800__1 : t800;
    t900 = t900 === VOID ? this.t900__1 : t900;
    t950 = t950 === VOID ? this.t950__1 : t950;
    return $super === VOID ? this.copy_m5jfch_k$(t50, t100, t200, t300, t400, t500, t600, t700, t800, t900, t950) : $super.copy_m5jfch_k$.call(this, t50, t100, t200, t300, t400, t500, t600, t700, t800, t900, t950);
  };
  protoOf(Shades).toString = function () {
    return 'Shades(t50=' + this.t50__1 + ', t100=' + this.t100__1 + ', t200=' + this.t200__1 + ', t300=' + this.t300__1 + ', t400=' + this.t400__1 + ', t500=' + this.t500__1 + ', t600=' + this.t600__1 + ', t700=' + this.t700__1 + ', t800=' + this.t800__1 + ', t900=' + this.t900__1 + ', t950=' + this.t950__1 + ')';
  };
  protoOf(Shades).hashCode = function () {
    var result = hashCode(this.t50__1);
    result = imul(result, 31) + hashCode(this.t100__1) | 0;
    result = imul(result, 31) + hashCode(this.t200__1) | 0;
    result = imul(result, 31) + hashCode(this.t300__1) | 0;
    result = imul(result, 31) + hashCode(this.t400__1) | 0;
    result = imul(result, 31) + hashCode(this.t500__1) | 0;
    result = imul(result, 31) + hashCode(this.t600__1) | 0;
    result = imul(result, 31) + hashCode(this.t700__1) | 0;
    result = imul(result, 31) + hashCode(this.t800__1) | 0;
    result = imul(result, 31) + hashCode(this.t900__1) | 0;
    result = imul(result, 31) + hashCode(this.t950__1) | 0;
    return result;
  };
  protoOf(Shades).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shades))
      return false;
    var tmp0_other_with_cast = other instanceof Shades ? other : THROW_CCE();
    if (!equals(this.t50__1, tmp0_other_with_cast.t50__1))
      return false;
    if (!equals(this.t100__1, tmp0_other_with_cast.t100__1))
      return false;
    if (!equals(this.t200__1, tmp0_other_with_cast.t200__1))
      return false;
    if (!equals(this.t300__1, tmp0_other_with_cast.t300__1))
      return false;
    if (!equals(this.t400__1, tmp0_other_with_cast.t400__1))
      return false;
    if (!equals(this.t500__1, tmp0_other_with_cast.t500__1))
      return false;
    if (!equals(this.t600__1, tmp0_other_with_cast.t600__1))
      return false;
    if (!equals(this.t700__1, tmp0_other_with_cast.t700__1))
      return false;
    if (!equals(this.t800__1, tmp0_other_with_cast.t800__1))
      return false;
    if (!equals(this.t900__1, tmp0_other_with_cast.t900__1))
      return false;
    if (!equals(this.t950__1, tmp0_other_with_cast.t950__1))
      return false;
    return true;
  };
  function get_$stableprop_27() {
    return 0;
  }
  function Weighted(item, weight, tail) {
    tail = tail === VOID ? 1.0 : tail;
    this.item_1 = item;
    this.weight_1 = weight;
    this.tail_1 = tail;
    this.$stable_1 = 0;
  }
  protoOf(Weighted).get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  protoOf(Weighted).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(Weighted).get_tail_wousgp_k$ = function () {
    return this.tail_1;
  };
  protoOf(Weighted).component1_7eebsc_k$ = function () {
    return this.item_1;
  };
  protoOf(Weighted).component2_7eebsb_k$ = function () {
    return this.weight_1;
  };
  protoOf(Weighted).component3_7eebsa_k$ = function () {
    return this.tail_1;
  };
  protoOf(Weighted).copy_gazc12_k$ = function (item, weight, tail) {
    return new Weighted(item, weight, tail);
  };
  protoOf(Weighted).copy$default_xlpcsi_k$ = function (item, weight, tail, $super) {
    item = item === VOID ? this.item_1 : item;
    weight = weight === VOID ? this.weight_1 : weight;
    tail = tail === VOID ? this.tail_1 : tail;
    return $super === VOID ? this.copy_gazc12_k$(item, weight, tail) : $super.copy_gazc12_k$.call(this, item, weight, tail);
  };
  protoOf(Weighted).toString = function () {
    return 'Weighted(item=' + this.item_1 + ', weight=' + this.weight_1 + ', tail=' + this.tail_1 + ')';
  };
  protoOf(Weighted).hashCode = function () {
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + getNumberHashCode(this.weight_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.tail_1) | 0;
    return result;
  };
  protoOf(Weighted).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Weighted))
      return false;
    var tmp0_other_with_cast = other instanceof Weighted ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!equals(this.weight_1, tmp0_other_with_cast.weight_1))
      return false;
    if (!equals(this.tail_1, tmp0_other_with_cast.tail_1))
      return false;
    return true;
  };
  function get_$stableprop_28() {
    return 8;
  }
  function MutableWeighted(item, weight, tail) {
    tail = tail === VOID ? 1.0 : tail;
    this.item_1 = item;
    this.weight_1 = weight;
    this.tail_1 = tail;
    this.$stable_1 = 8;
  }
  protoOf(MutableWeighted).get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  protoOf(MutableWeighted).set_weight_l75ca5_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  protoOf(MutableWeighted).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(MutableWeighted).set_tail_45v91h_k$ = function (_set____db54di) {
    this.tail_1 = _set____db54di;
  };
  protoOf(MutableWeighted).get_tail_wousgp_k$ = function () {
    return this.tail_1;
  };
  protoOf(MutableWeighted).component1_7eebsc_k$ = function () {
    return this.item_1;
  };
  protoOf(MutableWeighted).component2_7eebsb_k$ = function () {
    return this.weight_1;
  };
  protoOf(MutableWeighted).component3_7eebsa_k$ = function () {
    return this.tail_1;
  };
  protoOf(MutableWeighted).copy_gazc12_k$ = function (item, weight, tail) {
    return new MutableWeighted(item, weight, tail);
  };
  protoOf(MutableWeighted).copy$default_dqvzkq_k$ = function (item, weight, tail, $super) {
    item = item === VOID ? this.item_1 : item;
    weight = weight === VOID ? this.weight_1 : weight;
    tail = tail === VOID ? this.tail_1 : tail;
    return $super === VOID ? this.copy_gazc12_k$(item, weight, tail) : $super.copy_gazc12_k$.call(this, item, weight, tail);
  };
  protoOf(MutableWeighted).toString = function () {
    return 'MutableWeighted(item=' + this.item_1 + ', weight=' + this.weight_1 + ', tail=' + this.tail_1 + ')';
  };
  protoOf(MutableWeighted).hashCode = function () {
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + getNumberHashCode(this.weight_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.tail_1) | 0;
    return result;
  };
  protoOf(MutableWeighted).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MutableWeighted))
      return false;
    var tmp0_other_with_cast = other instanceof MutableWeighted ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!equals(this.weight_1, tmp0_other_with_cast.weight_1))
      return false;
    if (!equals(this.tail_1, tmp0_other_with_cast.tail_1))
      return false;
    return true;
  };
  function takeRandomItems(_this__u8e3s4, random, count, multiplier, getTail, getWeight) {
    multiplier = multiplier === VOID ? 0.0 : multiplier;
    var tmp;
    if (getTail === VOID) {
      tmp = takeRandomItems$lambda;
    } else {
      tmp = getTail;
    }
    getTail = tmp;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(count);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'com.minutiae.weight.takeRandomItems.<anonymous>' call
        var result = getRandomItem(_this__u8e3s4, random, multiplier, getTail, getWeight);
        removeAll(_this__u8e3s4, takeRandomItems$lambda_0(result));
        list.add_utx5q5_k$(result);
      }
       while (inductionVariable < count);
    return list;
  }
  function getRandomItems(_this__u8e3s4, random, count, multiplier, getTail, getWeight) {
    multiplier = multiplier === VOID ? 0.0 : multiplier;
    var tmp;
    if (getTail === VOID) {
      tmp = getRandomItems$lambda;
    } else {
      tmp = getTail;
    }
    getTail = tmp;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(count);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'com.minutiae.weight.getRandomItems.<anonymous>' call
        var tmp$ret$0 = getRandomItem(_this__u8e3s4, random, multiplier, getTail, getWeight);
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < count);
    return list;
  }
  function getRandomItemOrNull(_this__u8e3s4, random, multiplier, getTail, getWeight) {
    multiplier = multiplier === VOID ? 0.0 : multiplier;
    var tmp;
    if (getTail === VOID) {
      tmp = getRandomItemOrNull$lambda;
    } else {
      tmp = getTail;
    }
    getTail = tmp;
    var tmp0_subject = count(_this__u8e3s4);
    if (tmp0_subject === 0)
      return null;
    else if (tmp0_subject === 1)
      return first(_this__u8e3s4);
    // Inline function 'com.minutiae.game.sumOf' call
    var sum = 0.0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.minutiae.game.sumOf.<anonymous>' call
      sum = sum + getWeight(element);
    }
    var totalWeight = sum;
    if (totalWeight <= 0.0)
      return null;
    var offset = totalWeight * multiplier;
    var list = shuffled(_this__u8e3s4, random);
    // Inline function 'com.minutiae.game.sumOf' call
    var sum_0 = 0.0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.minutiae.game.sumOf.<anonymous>' call
      sum_0 = sum_0 + getTail(element_0);
    }
    var totalWeightWithTail = totalWeight + sum_0 * offset;
    var threshold = random.nextFloat_jqti5l_k$() * totalWeightWithTail;
    var tmp1_iterator = list.iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var item = tmp1_iterator.next_20eer_k$();
      threshold = threshold - (getWeight(item) + getTail(item) * offset);
      if (threshold <= 0.0)
        return item;
    }
    return null;
  }
  function calculateChances(_this__u8e3s4, multiplier, getTail, getWeight) {
    multiplier = multiplier === VOID ? 0.0 : multiplier;
    var tmp;
    if (getTail === VOID) {
      tmp = calculateChances$lambda;
    } else {
      tmp = getTail;
    }
    getTail = tmp;
    // Inline function 'com.minutiae.game.sumOf' call
    var sum = 0.0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.minutiae.game.sumOf.<anonymous>' call
      sum = sum + getWeight(element);
    }
    var totalWeight = sum;
    if (totalWeight <= 0.0)
      return emptyMap();
    var offset = totalWeight * multiplier;
    // Inline function 'com.minutiae.game.sumOf' call
    var sum_0 = 0.0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.minutiae.game.sumOf.<anonymous>' call
      sum_0 = sum_0 + getTail(element_0);
    }
    var totalWeightWithTail = totalWeight + sum_0 * offset;
    // Inline function 'kotlin.collections.associateWith' call
    var result = LinkedHashMap_init_$Create$_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(_this__u8e3s4, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator_1 = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'com.minutiae.weight.calculateChances.<anonymous>' call
      var tmp$ret$2 = (getTail(element_1) * offset + getWeight(element_1)) / totalWeightWithTail;
      result.put_4fpzoq_k$(element_1, tmp$ret$2);
    }
    return result;
  }
  function getRandomItem(_this__u8e3s4, random, multiplier, getTail, getWeight) {
    multiplier = multiplier === VOID ? 0.0 : multiplier;
    var tmp;
    if (getTail === VOID) {
      tmp = getRandomItem$lambda;
    } else {
      tmp = getTail;
    }
    getTail = tmp;
    var tmp0_elvis_lhs = getRandomItemOrNull(_this__u8e3s4, random, multiplier, getTail, getWeight);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throwException();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function getRandomItemOrNull_0(_this__u8e3s4, random, multiplier) {
    multiplier = multiplier === VOID ? 0.0 : multiplier;
    var tmp = getRandomItemOrNull$lambda_0;
    var tmp0_safe_receiver = getRandomItemOrNull(_this__u8e3s4, random, multiplier, tmp, getRandomItemOrNull$lambda_1);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.item_1;
  }
  function getRandomItem_0(_this__u8e3s4, random, multiplier) {
    multiplier = multiplier === VOID ? 0.0 : multiplier;
    var tmp0_elvis_lhs = getRandomItemOrNull_0(_this__u8e3s4, random, multiplier);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwException();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function throwException() {
    throw NoSuchElementException_init_$Create$('could not obtain weighted item');
  }
  function takeRandomItems$lambda(it) {
    return 1.0;
  }
  function takeRandomItems$lambda_0($result) {
    return function (it) {
      return it === $result;
    };
  }
  function getRandomItems$lambda(it) {
    return 1.0;
  }
  function getRandomItemOrNull$lambda(it) {
    return 1.0;
  }
  function calculateChances$lambda(it) {
    return 1.0;
  }
  function getRandomItem$lambda(it) {
    return 1.0;
  }
  function getRandomItemOrNull$lambda_0(it) {
    return it.tail_1;
  }
  function getRandomItemOrNull$lambda_1(it) {
    return it.weight_1;
  }
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function get_$stableprop_29() {
    return 0;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [createSimpleEnumSerializer('model.Category', values()), null, new ArrayListSerializer(StringSerializer_getInstance()), createSimpleEnumSerializer('model.Difficulty', values_0()), new ArrayListSerializer(StringSerializer_getInstance()), null, null, null, new ArrayListSerializer(StringSerializer_getInstance()), null];
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('model.Question', this, 10);
    tmp0_serialDesc.addElement_5pzumi_k$('category', false);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('tags', false);
    tmp0_serialDesc.addElement_5pzumi_k$('difficulty', false);
    tmp0_serialDesc.addElement_5pzumi_k$('regions', false);
    tmp0_serialDesc.addElement_5pzumi_k$('isNiche', false);
    tmp0_serialDesc.addElement_5pzumi_k$('question', false);
    tmp0_serialDesc.addElement_5pzumi_k$('correctAnswer', false);
    tmp0_serialDesc.addElement_5pzumi_k$('incorrectAnswers', false);
    tmp0_serialDesc.addElement_5pzumi_k$('type', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_7().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], StringSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], tmp0_cached[4], BooleanSerializer_getInstance(), $serializer_getInstance_1(), StringSerializer_getInstance(), tmp0_cached[8], StringSerializer_getInstance()];
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = false;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp15_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp16_cached = Companion_getInstance_7().$childSerializers_1;
    if (tmp15_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp16_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp16_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, tmp16_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp16_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, $serializer_getInstance_1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 8, tmp16_cached[8], tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 0, tmp16_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp16_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, tmp16_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp16_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, $serializer_getInstance_1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 8, tmp16_cached[8], tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.decodeStringElement_3oenpg_k$(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Question_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer).serialize_y6jvf9_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().$childSerializers_1;
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 0, tmp2_cached[0], value.category_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.id_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 2, tmp2_cached[2], value.tags_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 3, tmp2_cached[3], value.difficulty_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 4, tmp2_cached[4], value.regions_1);
    tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 5, value.isNiche_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 6, $serializer_getInstance_1(), value.question_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 7, value.correctAnswer_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 8, tmp2_cached[8], value.incorrectAnswers_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 9, value.type_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_y6jvf9_k$(encoder, value instanceof Question ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Question_init_$Init$(seen1, category, id, tags, difficulty, regions, isNiche, question, correctAnswer, incorrectAnswers, type, serializationConstructorMarker, $this) {
    if (!(1023 === (1023 & seen1))) {
      throwMissingFieldException(seen1, 1023, $serializer_getInstance().descriptor_1);
    }
    $this.category_1 = category;
    $this.id_1 = id;
    $this.tags_1 = tags;
    $this.difficulty_1 = difficulty;
    $this.regions_1 = regions;
    $this.isNiche_1 = isNiche;
    $this.question_1 = question;
    $this.correctAnswer_1 = correctAnswer;
    $this.incorrectAnswers_1 = incorrectAnswers;
    $this.type_1 = type;
    $this.$stable_1 = 0;
    return $this;
  }
  function Question_init_$Create$(seen1, category, id, tags, difficulty, regions, isNiche, question, correctAnswer, incorrectAnswers, type, serializationConstructorMarker) {
    return Question_init_$Init$(seen1, category, id, tags, difficulty, regions, isNiche, question, correctAnswer, incorrectAnswers, type, serializationConstructorMarker, objectCreate(protoOf(Question)));
  }
  function get_$stableprop_30() {
    return 0;
  }
  function Question(category, id, tags, difficulty, regions, isNiche, question, correctAnswer, incorrectAnswers, type) {
    Companion_getInstance_7();
    this.category_1 = category;
    this.id_1 = id;
    this.tags_1 = tags;
    this.difficulty_1 = difficulty;
    this.regions_1 = regions;
    this.isNiche_1 = isNiche;
    this.question_1 = question;
    this.correctAnswer_1 = correctAnswer;
    this.incorrectAnswers_1 = incorrectAnswers;
    this.type_1 = type;
    this.$stable_1 = 0;
  }
  protoOf(Question).get_category_uyv41l_k$ = function () {
    return this.category_1;
  };
  protoOf(Question).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Question).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(Question).get_difficulty_a2zhac_k$ = function () {
    return this.difficulty_1;
  };
  protoOf(Question).get_regions_j871na_k$ = function () {
    return this.regions_1;
  };
  protoOf(Question).get_isNiche_zfq782_k$ = function () {
    return this.isNiche_1;
  };
  protoOf(Question).get_question_jy1o6n_k$ = function () {
    return this.question_1;
  };
  protoOf(Question).get_correctAnswer_igqzxd_k$ = function () {
    return this.correctAnswer_1;
  };
  protoOf(Question).get_incorrectAnswers_42udd3_k$ = function () {
    return this.incorrectAnswers_1;
  };
  protoOf(Question).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(Question).get_text_wouvsm_k$ = function () {
    return this.question_1.text_1;
  };
  protoOf(Question).getAnswers_9huh4u_k$ = function (random) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.incorrectAnswers_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'model.Question.getAnswers.<anonymous>' call
      var tmp$ret$0 = new Answer(item, false);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return shuffled(plus(destination, new Answer(this.correctAnswer_1, true)), random);
  };
  protoOf(Question).component1_7eebsc_k$ = function () {
    return this.category_1;
  };
  protoOf(Question).component2_7eebsb_k$ = function () {
    return this.id_1;
  };
  protoOf(Question).component3_7eebsa_k$ = function () {
    return this.tags_1;
  };
  protoOf(Question).component4_7eebs9_k$ = function () {
    return this.difficulty_1;
  };
  protoOf(Question).component5_7eebs8_k$ = function () {
    return this.regions_1;
  };
  protoOf(Question).component6_7eebs7_k$ = function () {
    return this.isNiche_1;
  };
  protoOf(Question).component7_7eebs6_k$ = function () {
    return this.question_1;
  };
  protoOf(Question).component8_7eebs5_k$ = function () {
    return this.correctAnswer_1;
  };
  protoOf(Question).component9_7eebs4_k$ = function () {
    return this.incorrectAnswers_1;
  };
  protoOf(Question).component10_gazzfo_k$ = function () {
    return this.type_1;
  };
  protoOf(Question).copy_uizzcn_k$ = function (category, id, tags, difficulty, regions, isNiche, question, correctAnswer, incorrectAnswers, type) {
    return new Question(category, id, tags, difficulty, regions, isNiche, question, correctAnswer, incorrectAnswers, type);
  };
  protoOf(Question).copy$default_gdsi8h_k$ = function (category, id, tags, difficulty, regions, isNiche, question, correctAnswer, incorrectAnswers, type, $super) {
    category = category === VOID ? this.category_1 : category;
    id = id === VOID ? this.id_1 : id;
    tags = tags === VOID ? this.tags_1 : tags;
    difficulty = difficulty === VOID ? this.difficulty_1 : difficulty;
    regions = regions === VOID ? this.regions_1 : regions;
    isNiche = isNiche === VOID ? this.isNiche_1 : isNiche;
    question = question === VOID ? this.question_1 : question;
    correctAnswer = correctAnswer === VOID ? this.correctAnswer_1 : correctAnswer;
    incorrectAnswers = incorrectAnswers === VOID ? this.incorrectAnswers_1 : incorrectAnswers;
    type = type === VOID ? this.type_1 : type;
    return $super === VOID ? this.copy_uizzcn_k$(category, id, tags, difficulty, regions, isNiche, question, correctAnswer, incorrectAnswers, type) : $super.copy_uizzcn_k$.call(this, category, id, tags, difficulty, regions, isNiche, question, correctAnswer, incorrectAnswers, type);
  };
  protoOf(Question).toString = function () {
    return 'Question(category=' + this.category_1 + ', id=' + this.id_1 + ', tags=' + this.tags_1 + ', difficulty=' + this.difficulty_1 + ', regions=' + this.regions_1 + ', isNiche=' + this.isNiche_1 + ', question=' + this.question_1 + ', correctAnswer=' + this.correctAnswer_1 + ', incorrectAnswers=' + this.incorrectAnswers_1 + ', type=' + this.type_1 + ')';
  };
  protoOf(Question).hashCode = function () {
    var result = this.category_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.id_1) | 0;
    result = imul(result, 31) + hashCode(this.tags_1) | 0;
    result = imul(result, 31) + this.difficulty_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.regions_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isNiche_1) | 0;
    result = imul(result, 31) + this.question_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.correctAnswer_1) | 0;
    result = imul(result, 31) + hashCode(this.incorrectAnswers_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.type_1) | 0;
    return result;
  };
  protoOf(Question).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Question))
      return false;
    var tmp0_other_with_cast = other instanceof Question ? other : THROW_CCE();
    if (!this.category_1.equals(tmp0_other_with_cast.category_1))
      return false;
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!equals(this.tags_1, tmp0_other_with_cast.tags_1))
      return false;
    if (!this.difficulty_1.equals(tmp0_other_with_cast.difficulty_1))
      return false;
    if (!equals(this.regions_1, tmp0_other_with_cast.regions_1))
      return false;
    if (!(this.isNiche_1 === tmp0_other_with_cast.isNiche_1))
      return false;
    if (!this.question_1.equals(tmp0_other_with_cast.question_1))
      return false;
    if (!(this.correctAnswer_1 === tmp0_other_with_cast.correctAnswer_1))
      return false;
    if (!equals(this.incorrectAnswers_1, tmp0_other_with_cast.incorrectAnswers_1))
      return false;
    if (!(this.type_1 === tmp0_other_with_cast.type_1))
      return false;
    return true;
  };
  function get_$stableprop_31() {
    return 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('model.Answer', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('text', false);
    tmp0_serialDesc.addElement_5pzumi_k$('isCorrect', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Answer_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).serialize_99ugal_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.text_1);
    tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 1, value.isCorrect_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_99ugal_k$(encoder, value instanceof Answer ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Answer_init_$Init$(seen1, text, isCorrect, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_0().descriptor_1);
    }
    $this.text_1 = text;
    $this.isCorrect_1 = isCorrect;
    $this.$stable_1 = 0;
    return $this;
  }
  function Answer_init_$Create$(seen1, text, isCorrect, serializationConstructorMarker) {
    return Answer_init_$Init$(seen1, text, isCorrect, serializationConstructorMarker, objectCreate(protoOf(Answer)));
  }
  function get_$stableprop_32() {
    return 0;
  }
  function Answer(text, isCorrect) {
    Companion_getInstance_8();
    this.text_1 = text;
    this.isCorrect_1 = isCorrect;
    this.$stable_1 = 0;
  }
  protoOf(Answer).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(Answer).get_isCorrect_eq0myf_k$ = function () {
    return this.isCorrect_1;
  };
  protoOf(Answer).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(Answer).component2_7eebsb_k$ = function () {
    return this.isCorrect_1;
  };
  protoOf(Answer).copy_smzrfk_k$ = function (text, isCorrect) {
    return new Answer(text, isCorrect);
  };
  protoOf(Answer).copy$default_7cow2e_k$ = function (text, isCorrect, $super) {
    text = text === VOID ? this.text_1 : text;
    isCorrect = isCorrect === VOID ? this.isCorrect_1 : isCorrect;
    return $super === VOID ? this.copy_smzrfk_k$(text, isCorrect) : $super.copy_smzrfk_k$.call(this, text, isCorrect);
  };
  protoOf(Answer).toString = function () {
    return 'Answer(text=' + this.text_1 + ', isCorrect=' + this.isCorrect_1 + ')';
  };
  protoOf(Answer).hashCode = function () {
    var result = getStringHashCode(this.text_1);
    result = imul(result, 31) + getBooleanHashCode(this.isCorrect_1) | 0;
    return result;
  };
  protoOf(Answer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Answer))
      return false;
    var tmp0_other_with_cast = other instanceof Answer ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    if (!(this.isCorrect_1 === tmp0_other_with_cast.isCorrect_1))
      return false;
    return true;
  };
  function get_$stableprop_33() {
    return 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('model.QuestionText', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('text', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return QuestionText_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).serialize_uutg8_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.text_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_uutg8_k$(encoder, value instanceof QuestionText ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function QuestionText_init_$Init$(seen1, text, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_1().descriptor_1);
    }
    $this.text_1 = text;
    $this.$stable_1 = 0;
    return $this;
  }
  function QuestionText_init_$Create$(seen1, text, serializationConstructorMarker) {
    return QuestionText_init_$Init$(seen1, text, serializationConstructorMarker, objectCreate(protoOf(QuestionText)));
  }
  function get_$stableprop_34() {
    return 0;
  }
  function QuestionText(text) {
    Companion_getInstance_9();
    this.text_1 = text;
    this.$stable_1 = 0;
  }
  protoOf(QuestionText).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(QuestionText).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(QuestionText).copy_a35qlh_k$ = function (text) {
    return new QuestionText(text);
  };
  protoOf(QuestionText).copy$default_vt6upx_k$ = function (text, $super) {
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_a35qlh_k$(text) : $super.copy_a35qlh_k$.call(this, text);
  };
  protoOf(QuestionText).toString = function () {
    return 'QuestionText(text=' + this.text_1 + ')';
  };
  protoOf(QuestionText).hashCode = function () {
    return getStringHashCode(this.text_1);
  };
  protoOf(QuestionText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuestionText))
      return false;
    var tmp0_other_with_cast = other instanceof QuestionText ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    return true;
  };
  function _get_$childSerializers__r2zwns_0($this) {
    return $this.$childSerializers_1;
  }
  function get_$stableprop_35() {
    return 0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, new ArrayListSerializer(createSimpleEnumSerializer('model.Category', values())), new ArrayListSerializer(createSimpleEnumSerializer('model.Difficulty', values_0())), null];
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('model.QuestionRequest', this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('limit', true);
    tmp0_serialDesc.addElement_5pzumi_k$('categories', true);
    tmp0_serialDesc.addElement_5pzumi_k$('difficulties', true);
    tmp0_serialDesc.addElement_5pzumi_k$('region', true);
    tmp0_serialDesc.pushClassAnnotation_xtmllk_k$(new Resource('/v2/questions'));
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_2).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_10().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1]), get_nullable(tmp0_cached[2]), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_2).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp9_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp10_cached = Companion_getInstance_10().$childSerializers_1;
    if (tmp9_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, tmp10_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, tmp10_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, tmp10_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, tmp10_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.endStructure_1xqz0n_k$(tmp0_desc);
    return QuestionRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).serialize_gkwx36_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().$childSerializers_1;
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.limit_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, IntSerializer_getInstance(), value.limit_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.categories_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, tmp2_cached[1], value.categories_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.difficulties_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, tmp2_cached[2], value.difficulties_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.region_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.region_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_2).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_gkwx36_k$(encoder, value instanceof QuestionRequest ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function QuestionRequest_init_$Init$(seen1, limit, categories, difficulties, region, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_2().descriptor_1);
    }
    if (0 === (seen1 & 1))
      $this.limit_1 = null;
    else
      $this.limit_1 = limit;
    if (0 === (seen1 & 2))
      $this.categories_1 = null;
    else
      $this.categories_1 = categories;
    if (0 === (seen1 & 4))
      $this.difficulties_1 = null;
    else
      $this.difficulties_1 = difficulties;
    if (0 === (seen1 & 8))
      $this.region_1 = null;
    else
      $this.region_1 = region;
    $this.$stable_1 = 0;
    return $this;
  }
  function QuestionRequest_init_$Create$(seen1, limit, categories, difficulties, region, serializationConstructorMarker) {
    return QuestionRequest_init_$Init$(seen1, limit, categories, difficulties, region, serializationConstructorMarker, objectCreate(protoOf(QuestionRequest)));
  }
  function get_$stableprop_36() {
    return 0;
  }
  function QuestionRequest(limit, categories, difficulties, region) {
    Companion_getInstance_10();
    limit = limit === VOID ? null : limit;
    categories = categories === VOID ? null : categories;
    difficulties = difficulties === VOID ? null : difficulties;
    region = region === VOID ? null : region;
    this.limit_1 = limit;
    this.categories_1 = categories;
    this.difficulties_1 = difficulties;
    this.region_1 = region;
    this.$stable_1 = 0;
  }
  protoOf(QuestionRequest).get_limit_iuokuq_k$ = function () {
    return this.limit_1;
  };
  protoOf(QuestionRequest).get_categories_19ns11_k$ = function () {
    return this.categories_1;
  };
  protoOf(QuestionRequest).get_difficulties_thsqua_k$ = function () {
    return this.difficulties_1;
  };
  protoOf(QuestionRequest).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  var Category_music_instance;
  var Category_sport_and_leisure_instance;
  var Category_film_and_tv_instance;
  var Category_arts_and_literature_instance;
  var Category_history_instance;
  var Category_society_and_culture_instance;
  var Category_science_instance;
  var Category_geography_instance;
  var Category_food_and_drink_instance;
  var Category_general_knowledge_instance;
  function values() {
    return [Category_music_getInstance(), Category_sport_and_leisure_getInstance(), Category_film_and_tv_getInstance(), Category_arts_and_literature_getInstance(), Category_history_getInstance(), Category_society_and_culture_getInstance(), Category_science_getInstance(), Category_geography_getInstance(), Category_food_and_drink_getInstance(), Category_general_knowledge_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'music':
        return Category_music_getInstance();
      case 'sport_and_leisure':
        return Category_sport_and_leisure_getInstance();
      case 'film_and_tv':
        return Category_film_and_tv_getInstance();
      case 'arts_and_literature':
        return Category_arts_and_literature_getInstance();
      case 'history':
        return Category_history_getInstance();
      case 'society_and_culture':
        return Category_society_and_culture_getInstance();
      case 'science':
        return Category_science_getInstance();
      case 'geography':
        return Category_geography_getInstance();
      case 'food_and_drink':
        return Category_food_and_drink_getInstance();
      case 'general_knowledge':
        return Category_general_knowledge_getInstance();
      default:
        Category_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Category_entriesInitialized;
  function Category_initEntries() {
    if (Category_entriesInitialized)
      return Unit_getInstance();
    Category_entriesInitialized = true;
    Category_music_instance = new Category('music', 0, 'Music');
    Category_sport_and_leisure_instance = new Category('sport_and_leisure', 1, 'Sports & Leisure');
    Category_film_and_tv_instance = new Category('film_and_tv', 2, 'Film & Television');
    Category_arts_and_literature_instance = new Category('arts_and_literature', 3, 'Arts & Literature');
    Category_history_instance = new Category('history', 4, 'History');
    Category_society_and_culture_instance = new Category('society_and_culture', 5, 'Society & Culture');
    Category_science_instance = new Category('science', 6, 'Science');
    Category_geography_instance = new Category('geography', 7, 'Geography');
    Category_food_and_drink_instance = new Category('food_and_drink', 8, 'Food & Drink');
    Category_general_knowledge_instance = new Category('general_knowledge', 9, 'General Knowledge');
  }
  var $ENTRIES;
  function Category(name, ordinal, displayName) {
    Enum.call(this, name, ordinal);
    this.displayName_1 = displayName;
  }
  protoOf(Category).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  var Difficulty_easy_instance;
  var Difficulty_medium_instance;
  var Difficulty_hard_instance;
  function values_0() {
    return [Difficulty_easy_getInstance(), Difficulty_medium_getInstance(), Difficulty_hard_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'easy':
        return Difficulty_easy_getInstance();
      case 'medium':
        return Difficulty_medium_getInstance();
      case 'hard':
        return Difficulty_hard_getInstance();
      default:
        Difficulty_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Difficulty_entriesInitialized;
  function Difficulty_initEntries() {
    if (Difficulty_entriesInitialized)
      return Unit_getInstance();
    Difficulty_entriesInitialized = true;
    Difficulty_easy_instance = new Difficulty('easy', 0, 'Easy', 1, 3.0);
    Difficulty_medium_instance = new Difficulty('medium', 1, 'Medium', 2, 2.0);
    Difficulty_hard_instance = new Difficulty('hard', 2, 'Hard', 3, 1.0);
  }
  var $ENTRIES_0;
  function Difficulty(name, ordinal, displayName, multiplier, weight) {
    Enum.call(this, name, ordinal);
    this.displayName_1 = displayName;
    this.multiplier_1 = multiplier;
    this.weight_1 = weight;
  }
  protoOf(Difficulty).get_displayName_sscnb0_k$ = function () {
    return this.displayName_1;
  };
  protoOf(Difficulty).get_multiplier_qxufe_k$ = function () {
    return this.multiplier_1;
  };
  protoOf(Difficulty).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  function Category_music_getInstance() {
    Category_initEntries();
    return Category_music_instance;
  }
  function Category_sport_and_leisure_getInstance() {
    Category_initEntries();
    return Category_sport_and_leisure_instance;
  }
  function Category_film_and_tv_getInstance() {
    Category_initEntries();
    return Category_film_and_tv_instance;
  }
  function Category_arts_and_literature_getInstance() {
    Category_initEntries();
    return Category_arts_and_literature_instance;
  }
  function Category_history_getInstance() {
    Category_initEntries();
    return Category_history_instance;
  }
  function Category_society_and_culture_getInstance() {
    Category_initEntries();
    return Category_society_and_culture_instance;
  }
  function Category_science_getInstance() {
    Category_initEntries();
    return Category_science_instance;
  }
  function Category_geography_getInstance() {
    Category_initEntries();
    return Category_geography_instance;
  }
  function Category_food_and_drink_getInstance() {
    Category_initEntries();
    return Category_food_and_drink_instance;
  }
  function Category_general_knowledge_getInstance() {
    Category_initEntries();
    return Category_general_knowledge_instance;
  }
  function Difficulty_easy_getInstance() {
    Difficulty_initEntries();
    return Difficulty_easy_instance;
  }
  function Difficulty_medium_getInstance() {
    Difficulty_initEntries();
    return Difficulty_medium_instance;
  }
  function Difficulty_hard_getInstance() {
    Difficulty_initEntries();
    return Difficulty_hard_instance;
  }
  //region block: post-declaration
  protoOf(GameOver).renderSideBar_oem711_k$ = renderSideBar;
  protoOf(GameOver).renderSideBar$composable_ixdoa1_k$ = renderSideBar$composable;
  protoOf(RoundOver).renderSideBar_oem711_k$ = renderSideBar;
  protoOf(RoundOver).renderSideBar$composable_ixdoa1_k$ = renderSideBar$composable;
  protoOf(ShopInstance).renderSideBar_oem711_k$ = renderSideBar;
  protoOf(ShopInstance).renderSideBar$composable_ixdoa1_k$ = renderSideBar$composable;
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_2).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: init
  TESTING = false;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=minutiae.js.map
