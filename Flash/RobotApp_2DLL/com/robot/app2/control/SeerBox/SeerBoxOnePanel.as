package com.robot.app2.control.SeerBox
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.StatManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   
   public class SeerBoxOnePanel implements ISeerBoxSubPanel
   {
       
      
      private var _xml:XML;
      
      private var _ui:MovieClip;
      
      private var content:MovieClip;
      
      private var isShow:Boolean = false;
      
      private var curPicNum:int = 1;
      
      private var timeOutValue2:uint = 0;
      
      public function SeerBoxOnePanel()
      {
         super();
      }
      
      public function show() : void
      {
         StatManager.sendStat2014("1202推送盒子","点击本周必看标签内容","2016运营活动");
         if(!this.content)
         {
            this.isShow = true;
            return;
         }
         (this._ui["body"] as MovieClip).addChild(this.content);
         this.timeOutValue2 = setTimeout(this.action,3000);
      }
      
      public function init(param1:XML, param2:MovieClip) : void
      {
         var scName:String;
         var xml:XML = param1;
         var ui:MovieClip = param2;
         this._xml = xml;
         this._ui = ui;
         scName = this._xml.@res;
         if(scName == null)
         {
            scName = "SeerBoxOnePanel";
         }
         ResourceManager.getResource(ClientConfig.getAppResource("update/SeerBox/" + scName),function(param1:MovieClip):void
         {
            var _loc2_:MovieClip = null;
            content = param1;
            content.addEventListener(MouseEvent.CLICK,onContentClick);
            var _loc3_:int = 1;
            while((_loc2_ = content["pages"]["page_" + _loc3_]) != null)
            {
               _loc2_.buttonMode = true;
               _loc2_.gotoAndStop(_loc3_ == 1 ? 2 : 1);
               _loc2_.addEventListener(MouseEvent.MOUSE_DOWN,onPageMouseDown);
               _loc3_++;
            }
            if(isShow)
            {
               show();
            }
         });
      }
      
      private function onContentClick(param1:MouseEvent) : void
      {
         var _loc2_:String = null;
         var _loc3_:String = null;
         switch(param1.target.name)
         {
            case "btn":
               if(this._xml.btn.length() < this.curPicNum)
               {
                  break;
               }
               _loc2_ = this._xml.btn[this.curPicNum - 1].@url;
               _loc3_ = this._xml.btn[this.curPicNum - 1].@type;
               if(_loc2_ != "" && _loc3_ != "")
               {
                  this._ui.dispatchEvent(new Event(Event.CLOSE));
                  BtnClick.go(_loc3_,_loc2_);
               }
               break;
         }
      }
      
      public function action(param1:int = 2) : void
      {
         var _loc2_:MovieClip = this.content["mc"]["mc_1"];
         var _loc3_:MovieClip = this.content["mc"]["mc_2"];
         _loc2_.x = _loc2_.y = 0;
         _loc2_.gotoAndStop(this.curPicNum);
         this.content["pages"]["page_" + this.curPicNum].gotoAndStop(1);
         this.curPicNum = param1 > _loc2_.totalFrames ? 1 : param1;
         this.content["pages"]["page_" + this.curPicNum].gotoAndStop(2);
         _loc3_.x = 636.25;
         _loc3_.y = 0;
         _loc3_.gotoAndStop(this.curPicNum);
         this.content["mc"].x = 0;
         this.content["mc"].y = 0;
         TweenLite.to(this.content["mc"],1,{"x":-636.25});
         clearTimeout(this.timeOutValue2);
         this.timeOutValue2 = setTimeout(this.action,4000,this.curPicNum + 1);
      }
      
      private function onPageMouseDown(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         if(_loc2_ == this.curPicNum)
         {
            return;
         }
         clearTimeout(this.timeOutValue2);
         this.action(_loc2_);
      }
      
      public function get dotNum() : int
      {
         return 0;
      }
      
      public function hide() : void
      {
         if(this.content != null && this.content.parent != null)
         {
            this.content.parent.removeChild(this.content);
         }
         clearTimeout(this.timeOutValue2);
      }
      
      public function destroy() : void
      {
         var _loc1_:MovieClip = null;
         this.hide();
         this._xml = null;
         this._ui = null;
         if(this.content == null)
         {
            return;
         }
         var _loc2_:int = 1;
         while((_loc1_ = this.content["pages"]["page_" + _loc2_]) != null)
         {
            _loc1_.removeEventListener(MouseEvent.MOUSE_DOWN,this.onPageMouseDown);
            _loc2_++;
         }
         this.content.removeEventListener(MouseEvent.CLICK,this.onContentClick);
         this.content = null;
      }
   }
}
