package com.robot.app2.component
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.mode.components.IComponent;
   import com.robot.core.net.XMLLoader;
   import org.taomee.ds.HashMap;
   
   public class AnalyzeQAByXmlComponet implements IComponent
   {
       
      
      private var _loadedCallBack:Function;
      
      private var loader:XMLLoader;
      
      private var _xmlHash:HashMap;
      
      private var _xmlLen:int;
      
      private var _rightAnswer:int;
      
      private var _questionInfo:Array;
      
      public function AnalyzeQAByXmlComponet(param1:String = "xml/AncientDragonQuestion.xml", param2:Function = null)
      {
         var url:String = param1;
         var loadedCallBack:Function = param2;
         this.loader = new XMLLoader();
         super();
         this._loadedCallBack = loadedCallBack;
         this._xmlHash = new HashMap();
         this.loader.load(ClientConfig.getResPath(url));
         this.loader.addEventListener(XMLEvent.COMPLETE,function(param1:XMLEvent):void
         {
            var _loc5_:XML = null;
            loader.removeEventListener(XMLEvent.COMPLETE,arguments.callee);
            var _loc3_:XML = new XML(param1.data);
            var _loc4_:XMLList = _loc3_.descendants("item");
            for each(_loc5_ in _loc4_)
            {
               _xmlHash.add(uint(_loc5_.@id),_loc5_);
            }
            _xmlLen = _xmlHash.length;
            if(_loadedCallBack != null)
            {
               _loadedCallBack();
            }
         });
      }
      
      public function getRandomQA() : Array
      {
         var _loc1_:int = Math.floor(Math.random() * this._xmlLen);
         return this.getQAByid(_loc1_);
      }
      
      public function getQAByid(param1:int) : Array
      {
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc2_:int = param1;
         var _loc3_:XML = this._xmlHash.getValue(_loc2_);
         var _loc4_:Array = [];
         if(_loc3_)
         {
            this._rightAnswer = int(_loc3_.@rightAnswer);
            _loc4_[0] = String(_loc3_.@question);
            _loc5_ = _loc3_.descendants("answer");
            for each(_loc6_ in _loc5_)
            {
               _loc4_.push(String(_loc6_.@desc));
            }
         }
         this._questionInfo = _loc4_;
         return _loc4_;
      }
      
      public function checkAnswerById(param1:int) : Boolean
      {
         return param1 == this._rightAnswer;
      }
      
      public function checkAnswerByStr(param1:int) : Boolean
      {
         var _loc2_:int = this._questionInfo.indexOf(param1) - 1;
         return _loc2_ == this._rightAnswer;
      }
      
      public function getRightAnswerId() : int
      {
         return this._rightAnswer;
      }
      
      public function destroy() : void
      {
         if(this._loadedCallBack != null)
         {
            this._loadedCallBack = null;
         }
         if(this._xmlHash)
         {
            this._xmlHash.clear();
            this._xmlHash = null;
         }
         if(this._questionInfo)
         {
            this._questionInfo.length = 0;
            this._questionInfo = null;
         }
         if(this.loader)
         {
            this.loader.destroy();
            this.loader = null;
         }
      }
   }
}
