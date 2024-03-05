package com.robot.app2.control.SeerBox
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.StatManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SeerBoxThreePanel implements ISeerBoxSubPanel
   {
       
      
      private var _xml:XML;
      
      private var _ui:MovieClip;
      
      private var content:MovieClip;
      
      private var isShow:Boolean = false;
      
      private var curIndex:int = 1;
      
      private var totalPage:int = 1;
      
      public function SeerBoxThreePanel()
      {
         super();
      }
      
      public function show() : void
      {
         StatManager.sendStat2014("1202推送盒子","点击即将下架标签内容","2016运营活动");
         if(!this.content)
         {
            this.isShow = true;
            return;
         }
         (this._ui["body"] as MovieClip).addChild(this.content);
         this.updateUI();
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
            scName = "SeerBoxThreePanel";
         }
         ResourceManager.getResource(ClientConfig.getAppResource("update/SeerBox/" + scName),function(param1:MovieClip):void
         {
            content = param1;
            content.addEventListener(MouseEvent.CLICK,onContentClick);
            totalPage = content["item_1"].totalFrames;
            CommonUI.setEnabled(content["pre"],totalPage > 1,totalPage <= 1);
            CommonUI.setEnabled(content["nex"],totalPage > 1,totalPage <= 1);
            if(isShow)
            {
               show();
            }
         });
      }
      
      private function onContentClick(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:String = null;
         var _loc4_:String = null;
         switch(param1.target.name)
         {
            case "btn":
               _loc2_ = int(param1.target.parent.name.split("_")[1]);
               _loc3_ = this._xml.btn[(this.curIndex - 1) * 3 + _loc2_ - 1].@url;
               _loc4_ = this._xml.btn[(this.curIndex - 1) * 3 + _loc2_ - 1].@type;
               if(_loc3_ != "" && _loc4_ != "")
               {
                  this._ui.dispatchEvent(new Event(Event.CLOSE));
                  BtnClick.go(_loc4_,_loc3_);
               }
               break;
            case "pre":
               --this.curIndex;
               this.updateUI();
               break;
            case "nex":
               ++this.curIndex;
               this.updateUI();
         }
      }
      
      private function updateUI() : void
      {
         if(this.curIndex < 1)
         {
            this.curIndex = 1;
         }
         if(this.curIndex > this.totalPage)
         {
            this.curIndex = this.totalPage;
         }
         var _loc1_:int = 1;
         while(_loc1_ <= 3)
         {
            this.content["item_" + _loc1_].gotoAndStop(this.curIndex);
            _loc1_++;
         }
         this.content["page"].text = this.curIndex + "/" + this.totalPage;
      }
      
      public function get dotNum() : int
      {
         return this._xml.btn.length();
      }
      
      public function hide() : void
      {
         if(this.content != null && this.content.parent != null)
         {
            this.content.parent.removeChild(this.content);
         }
      }
      
      public function destroy() : void
      {
         this.hide();
         if(!this.content)
         {
            this.content.removeEventListener(MouseEvent.CLICK,this.onContentClick);
         }
         this._xml = null;
         this._ui = null;
         this.content = null;
      }
   }
}
