package com.robot.core.config
{
   import com.robot.core.config.xml.FlashSpriteEvoMachineInfo;
   import flash.events.Event;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class FlashSpriteEvoMachineConfig
   {
      
      private static var _instance:com.robot.core.config.FlashSpriteEvoMachineConfig;
      
      private static var _urlloader:URLLoader;
       
      
      private var _isLoaded:Boolean = false;
      
      private var _isLoading:Boolean = false;
      
      private var _allXml:XMLList;
      
      private var _allInfos:HashMap;
      
      private var callback:Function;
      
      public function FlashSpriteEvoMachineConfig()
      {
         super();
      }
      
      public static function get Instance() : com.robot.core.config.FlashSpriteEvoMachineConfig
      {
         if(!_instance)
         {
            _instance = new com.robot.core.config.FlashSpriteEvoMachineConfig();
         }
         return _instance;
      }
      
      public function get allInfos() : HashMap
      {
         return this._allInfos;
      }
      
      public function getFSEMInfo(param1:Function) : void
      {
         if(this._isLoaded)
         {
            param1();
         }
         else
         {
            this.callback = param1;
            this.loadConfig();
         }
      }
      
      private function loadConfig() : void
      {
         if(!this._isLoaded && !this._isLoading)
         {
            this._isLoading = true;
            _urlloader = new URLLoader();
            _urlloader.addEventListener(Event.COMPLETE,this.onLoadXML);
            _urlloader.load(new URLRequest(ClientConfig.getResPath("xml/FlashSpriteEvoMachine.xml")));
         }
      }
      
      private function onLoadXML(param1:Event) : void
      {
         DebugTrace.show("加载FlashSpriteEvoMachine.xml");
         this._allXml = XML(param1.target.data).descendants("sprite");
         this.parserXml();
      }
      
      private function parserXml() : void
      {
         var _loc1_:XML = null;
         var _loc2_:FlashSpriteEvoMachineInfo = null;
         var _loc3_:XMLList = null;
         this._allInfos = new HashMap();
         for each(_loc1_ in this._allXml)
         {
            _loc2_ = new FlashSpriteEvoMachineInfo();
            _loc2_.evoID = uint(_loc1_.@evoID);
            _loc2_.monsterID = uint(_loc1_.@id);
            _loc2_.monsterName = String(_loc1_.@name);
            _loc3_ = _loc1_.descendants("item");
            _loc2_.itemID = uint(_loc3_.@id);
            _loc2_.itemName = String(_loc3_.@name);
            this._allInfos.add(_loc2_.evoID,_loc2_);
         }
         this._isLoaded = true;
         this._isLoading = false;
         this.callback();
      }
   }
}
