package com.robot.app2.control.SeerBox
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.StatManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   
   public class SeerBoxTwoPanel implements ISeerBoxSubPanel
   {
       
      
      private var _xml:XML;
      
      private var _ui:MovieClip;
      
      private var content:MovieClip;
      
      private var isShow:Boolean = false;
      
      private var curIndex:int;
      
      private var itemPanels:Vector.<com.robot.app2.control.SeerBox.IItemPanel>;
      
      public function SeerBoxTwoPanel()
      {
         super();
      }
      
      public function show() : void
      {
         var _loc2_:com.robot.app2.control.SeerBox.IItemPanel = null;
         if(!this.content)
         {
            this.isShow = true;
            return;
         }
         (this._ui["body"] as MovieClip).addChild(this.content);
         var _loc1_:int = 1;
         while(_loc1_ <= this.itemPanels.length)
         {
            _loc2_ = this.itemPanels[_loc1_ - 1];
            if(_loc2_ != null)
            {
               _loc2_.init(this.content["item_" + _loc1_]);
            }
            _loc1_++;
         }
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
            scName = "SeerBoxTwoPanel";
         }
         ResourceManager.getResource(ClientConfig.getAppResource("update/SeerBox/" + scName),function(param1:MovieClip):void
         {
            var _loc2_:MovieClip = null;
            var _loc4_:String = null;
            var _loc5_:Class = null;
            var _loc6_:com.robot.app2.control.SeerBox.IItemPanel = null;
            content = param1;
            content.addEventListener(MouseEvent.CLICK,onContentClick);
            itemPanels = new Vector.<com.robot.app2.control.SeerBox.IItemPanel>();
            var _loc3_:int = 1;
            while((_loc2_ = content["item_" + _loc3_]) != null)
            {
               if((_loc4_ = _xml.btn[_loc3_ - 1].@itemClass) != "")
               {
                  _loc6_ = new (_loc5_ = getDefinitionByName(_loc4_) as Class)() as com.robot.app2.control.SeerBox.IItemPanel;
                  itemPanels.push(_loc6_);
               }
               else
               {
                  itemPanels.push(null);
               }
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
               this.curIndex = param1.target.parent.name.split("_")[1];
               _loc2_ = this._xml.btn[this.curIndex - 1].@url;
               _loc3_ = this._xml.btn[this.curIndex - 1].@type;
               if(_loc2_ != "" && _loc3_ != "")
               {
                  this._ui.dispatchEvent(new Event(Event.CLOSE));
                  BtnClick.go(_loc3_,_loc2_);
               }
               if(this.curIndex == 1)
               {
                  StatManager.sendStat2014("1202推送盒子","点击每日必做钻石任务GO","2016运营活动");
               }
               if(this.curIndex == 2)
               {
                  StatManager.sendStat2014("1202推送盒子","点击每日必做在线好礼GO","2016运营活动");
               }
               if(this.curIndex == 3)
               {
                  StatManager.sendStat2014("1202推送盒子","点击每日必做功勋任务GO","2016运营活动");
               }
               if(this.curIndex == 4)
               {
                  StatManager.sendStat2014("1202推送盒子","点击每日必做精灵大乱斗GO","2016运营活动");
               }
               if(this.curIndex == 5)
               {
                  StatManager.sendStat2014("1202推送盒子","点击每日必做宝石开采GO","2016运营活动");
               }
               if(this.curIndex == 6)
               {
                  StatManager.sendStat2014("1202推送盒子","点击每日必做登陆好礼GO","2016运营活动");
               }
               if(this.curIndex == 7)
               {
                  StatManager.sendStat2014("1202推送盒子","点击每日必做战队贡献GO","2016运营活动");
               }
               if(this.curIndex == 8)
               {
                  StatManager.sendStat2014("1202推送盒子","点击每日必做巅峰圣战GO","2016运营活动");
               }
         }
      }
      
      public function get dotNum() : int
      {
         return 0;
      }
      
      public function hide() : void
      {
         var _loc2_:com.robot.app2.control.SeerBox.IItemPanel = null;
         var _loc1_:int = 1;
         while(_loc1_ <= this.itemPanels.length)
         {
            _loc2_ = this.itemPanels[_loc1_ - 1];
            if(_loc2_ != null)
            {
               _loc2_.destory();
            }
            _loc1_++;
         }
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
