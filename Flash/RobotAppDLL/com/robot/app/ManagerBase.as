package com.robot.app
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.net.XMLLoader;
   
   public class ManagerBase
   {
       
      
      private var _xmlLoader:XMLLoader;
      
      private var _callBack:Function;
      
      private var _isXmlLoaded:Boolean;
      
      public function ManagerBase()
      {
         super();
      }
      
      public function get isXmlLoaded() : Boolean
      {
         return this._isXmlLoaded;
      }
      
      protected function myLoadXml(param1:String, param2:Function) : void
      {
         this._callBack = param2;
         this._xmlLoader = new XMLLoader();
         this._xmlLoader.addEventListener(XMLEvent.COMPLETE,this.onXMLLoadCompleted);
         this._xmlLoader.load(ClientConfig.getResPath(param1));
      }
      
      private function onXMLLoadCompleted(param1:XMLEvent) : void
      {
         if(!param1 || !param1.data)
         {
            return;
         }
         this.parseXml(param1.data);
         this._isXmlLoaded = true;
         if(null != this._callBack)
         {
            this._callBack.apply(this);
            this._callBack = null;
         }
      }
      
      protected function parseXml(param1:XML) : void
      {
      }
   }
}
