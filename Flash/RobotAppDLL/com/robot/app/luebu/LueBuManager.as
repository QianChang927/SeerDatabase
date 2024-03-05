package com.robot.app.luebu
{
   import com.robot.app.ManagerBase;
   
   public class LueBuManager extends ManagerBase
   {
      
      private static var _instance:com.robot.app.luebu.LueBuManager;
       
      
      public var superProduct:int;
      
      public var superExchange:int;
      
      public var superEvoPro:int;
      
      public var superEvolveId:int;
      
      public var protocolId:int;
      
      public var bitBuff:int;
      
      public var movieUrl:String;
      
      public function LueBuManager()
      {
         super();
         if(!_instance)
         {
         }
      }
      
      public static function getInstance() : com.robot.app.luebu.LueBuManager
      {
         if(!_instance)
         {
            _instance = new com.robot.app.luebu.LueBuManager();
         }
         return _instance;
      }
      
      public function loadXml(param1:Function) : void
      {
         if(isXmlLoaded)
         {
            param1.apply();
         }
         else
         {
            myLoadXml(LueBuConst.XML_URL,param1);
         }
      }
      
      override protected function parseXml(param1:XML) : void
      {
         var _loc2_:XML = null;
         if(null == param1)
         {
            return;
         }
         for each(_loc2_ in param1.child("data"))
         {
            this.superProduct = _loc2_.attribute("superpro");
            this.superExchange = _loc2_.attribute("superexc");
            this.superEvoPro = _loc2_.attribute("supevolvepro");
            this.superEvolveId = _loc2_.attribute("superevolve");
            this.protocolId = _loc2_.attribute("protocol");
            this.bitBuff = _loc2_.attribute("bitbuff");
            this.movieUrl = _loc2_.attribute("movieurl");
         }
      }
   }
}
