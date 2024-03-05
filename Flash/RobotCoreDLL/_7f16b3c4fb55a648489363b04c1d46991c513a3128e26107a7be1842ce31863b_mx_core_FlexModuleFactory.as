package
{
   import flash.display.LoaderInfo;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.system.ApplicationDomain;
   import flash.system.Security;
   import flash.utils.Dictionary;
   import flash.utils.getDefinitionByName;
   import flashx.textLayout.compose.ISWFContext;
   import mx.core.EmbeddedFontRegistry;
   import mx.core.IFlexModule;
   import mx.core.IFlexModuleFactory;
   import mx.core.RSLData;
   import mx.core.Singleton;
   
   public class _7f16b3c4fb55a648489363b04c1d46991c513a3128e26107a7be1842ce31863b_mx_core_FlexModuleFactory extends Sprite implements IFlexModuleFactory, ISWFContext
   {
       
      
      private var _info:Object;
      
      public function _7f16b3c4fb55a648489363b04c1d46991c513a3128e26107a7be1842ce31863b_mx_core_FlexModuleFactory()
      {
         super();
         this.root.loaderInfo.addEventListener(Event.COMPLETE,this.RSLRootCompleteListener);
      }
      
      public function callInContext(param1:Function, param2:Object, param3:Array, param4:Boolean = true) : *
      {
         if(param4)
         {
            return param1.apply(param2,param3);
         }
         param1.apply(param2,param3);
      }
      
      public function addPreloadedRSL(param1:LoaderInfo, param2:Vector.<RSLData>) : void
      {
      }
      
      public function getImplementation(param1:String) : Object
      {
         return null;
      }
      
      public function registerImplementation(param1:String, param2:Object) : void
      {
      }
      
      public function create(... rest) : Object
      {
         var _loc2_:String = String(rest[0]);
         var _loc3_:Class = Class(getDefinitionByName(_loc2_));
         if(!_loc3_)
         {
            return null;
         }
         var _loc4_:Object;
         if((_loc4_ = new _loc3_()) is IFlexModule)
         {
            IFlexModule(_loc4_).moduleFactory = this;
         }
         if(rest.length == 0)
         {
            Singleton.registerClass("mx.core::IEmbeddedFontRegistry",Class(getDefinitionByName("mx.core::EmbeddedFontRegistry")));
            EmbeddedFontRegistry.registerFonts(this.info()["fonts"],this);
         }
         return _loc4_;
      }
      
      public function info() : Object
      {
         if(!this._info)
         {
            this._info = {
               "currentDomain":ApplicationDomain.currentDomain,
               "fonts":{
                  "FZZongYi-M05S":{
                     "regular":true,
                     "bold":false,
                     "italic":false,
                     "boldItalic":false
                  },
                  "华康简综艺":{
                     "regular":true,
                     "bold":false,
                     "italic":false,
                     "boldItalic":false
                  },
                  "迷你简菱心":{
                     "regular":true,
                     "bold":false,
                     "italic":false,
                     "boldItalic":false
                  }
               }
            };
         }
         return this._info;
      }
      
      public function allowDomainInRSL(... rest) : void
      {
         Security.allowDomain.apply(null,rest);
      }
      
      public function allowInsecureDomainInRSL(... rest) : void
      {
         Security.allowInsecureDomain.apply(null,rest);
      }
      
      public function get allowDomainsInNewRSLs() : Boolean
      {
         return false;
      }
      
      public function set allowDomainsInNewRSLs(param1:Boolean) : void
      {
      }
      
      public function get allowInsecureDomainsInNewRSLs() : Boolean
      {
         return false;
      }
      
      public function set allowInsecureDomainsInNewRSLs(param1:Boolean) : void
      {
      }
      
      public function get preloadedRSLs() : Dictionary
      {
         return null;
      }
      
      public function allowDomain(... rest) : void
      {
      }
      
      public function allowInsecureDomain(... rest) : void
      {
      }
      
      private function RSLRootCompleteListener(param1:Event) : void
      {
         EmbeddedFontRegistry.registerFonts(this.info()["fonts"],this);
         this.root.removeEventListener(Event.COMPLETE,this.RSLRootCompleteListener);
      }
   }
}
