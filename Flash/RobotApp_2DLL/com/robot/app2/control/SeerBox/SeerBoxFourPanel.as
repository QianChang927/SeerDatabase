package com.robot.app2.control.SeerBox
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SeerBoxFourPanel implements ISeerBoxSubPanel
   {
       
      
      private var _xml:XML;
      
      private var _ui:MovieClip;
      
      private var content:MovieClip;
      
      private var isShow:Boolean = false;
      
      private var curIndex:int = 1;
      
      private var totalPage:int = 1;
      
      private var tcdc1:TimeCountdownComponent;
      
      private var tcdc2:TimeCountdownComponent;
      
      public function SeerBoxFourPanel()
      {
         super();
      }
      
      public function show() : void
      {
         StatManager.sendStat2014("1202推送盒子","点击限时精彩标签内容","2016运营活动");
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
            scName = "SeerBoxFourPanel";
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
         var _loc2_:String = null;
         var _loc3_:String = null;
         switch(param1.target.name)
         {
            case "btn":
               this.curIndex = param1.target.parent.name.split("_")[1];
               _loc2_ = this._xml.btn[this.curIndex - 1].@url;
               _loc3_ = this._xml.btn[this.curIndex - 1].@type;
               if(_loc2_ != "" && _loc3_ != "")
               {
                  this._ui.dispatchEvent(new Event(Event.CLOSE));
                  BtnClick.go(_loc3_,_loc2_);
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
         if(this.content == null)
         {
            return;
         }
         if(this.curIndex < 1)
         {
            this.curIndex = 1;
         }
         if(this.curIndex > this.totalPage)
         {
            this.curIndex = this.totalPage;
         }
         var _loc1_:int = 1;
         while(_loc1_ <= 2)
         {
            this.content["item_" + _loc1_].gotoAndStop(this.curIndex);
            this.setItemTime(this.content["item_" + _loc1_]["timeMc"],(this.curIndex - 1) * 2 + _loc1_);
            _loc1_++;
         }
         this.content["page"].text = this.curIndex + "/" + this.totalPage;
      }
      
      private function setItemTime(param1:MovieClip, param2:int) : void
      {
         var _loc7_:int = 0;
         if(param1 == null)
         {
            return;
         }
         if(this._xml.btn[param2 - 1] == null)
         {
            return;
         }
         var _loc3_:String = this._xml.btn[param2 - 1].@startTime;
         var _loc4_:String = this._xml.btn[param2 - 1].@endTime;
         var _loc5_:Date = new Date(_loc3_);
         var _loc6_:Date = new Date(_loc4_);
         if(SystemTimerManager.sysBJDate.time > _loc5_.time)
         {
            if(SystemTimerManager.sysBJDate < _loc6_)
            {
               param1.gotoAndStop(2);
            }
            else
            {
               param1.gotoAndStop(3);
            }
         }
         else
         {
            param1.gotoAndStop(1);
            if((_loc7_ = (_loc5_.time - SystemTimerManager.sysBJDate.time) / (60 * 1000)) > 0)
            {
               if(this["tcdc" + param2] != null)
               {
                  this["tcdc" + param2].destroy();
               }
               this["tcdc" + param2] = new TimeCountdownComponent(param1["txt"]);
               this["tcdc" + param2].start(this.updateUI);
            }
         }
      }
      
      public function get dotNum() : int
      {
         var _loc3_:String = null;
         var _loc4_:Date = null;
         var _loc1_:int = 0;
         var _loc2_:int = 1;
         while(_loc2_ <= this._xml.btn.length())
         {
            _loc3_ = this._xml.btn[_loc2_ - 1].@endTime;
            _loc4_ = new Date(_loc3_);
            if(SystemTimerManager.sysBJDate > _loc4_)
            {
               _loc1_++;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public function hide() : void
      {
         if(this.content != null && this.content.parent != null)
         {
            this.content.parent.removeChild(this.content);
         }
         if(this.tcdc1 != null)
         {
            this.tcdc1.destroy();
         }
         if(this.tcdc2 != null)
         {
            this.tcdc2.destroy();
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
