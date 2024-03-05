package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_11894 extends BaseMapProcess
   {
       
      
      private var dailynum:int;
      
      private var pos:int = 0;
      
      private var pro:int = 0;
      
      private var start:Boolean = false;
      
      private var dazuoOK:Boolean = false;
      
      private var firstUpdate:Boolean = true;
      
      private var clickBtn:Boolean = false;
      
      private var itemnum:int;
      
      private var itemid:int = 1720853;
      
      public function MapProcess_11894()
      {
         super();
         SystemTimerManager.addTickFun(this.timeHandle);
         StatManager.sendStat2014("1025遥望时空尽头的浪漫","进入获取碎片面板","2019运营活动");
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
         this.updatePanel();
         this.firstUpdate = false;
      }
      
      private function updatePanel() : void
      {
         ItemManager.upDateCollection(this.itemid,function():void
         {
            itemnum = ItemManager.getNumByID(itemid);
         });
         KTool.getMultiValue([107058,12527],function(param1:Array):void
         {
            pos = param1[1] >> 20 & 15;
            dailynum = param1[1] & 255;
            var _loc2_:* = param1[1] >> 8 & 255;
            dazuoOK = 1 == (param1[1] >> 16 & 15);
            var _loc3_:int = 1;
            while(_loc3_ < 9)
            {
               if(pos > 0)
               {
                  CommonUI.setEnabled(conLevel["btn_" + _loc3_],pos == _loc3_ && dazuoOK);
               }
               conLevel["btn_" + _loc3_].visible = KTool.getBit(_loc2_,_loc3_) == 0 && dazuoOK && 0 == pos || pos == _loc3_;
               _loc3_++;
            }
            conLevel["num"].text = dailynum + "/5";
            conLevel["panel1"].visible = !dazuoOK;
            conLevel["panel2"].visible = false;
            if(clickBtn && pos > 0)
            {
               ModuleManager.showAppModule("RomanceAtTheEndOfTimeAndSpaceS1Panel");
            }
         });
      }
      
      private function onClick(param1:*) : void
      {
         var index:int = 0;
         var point:Point = null;
         var e:* = param1;
         var ename:String = String(e.target.name);
         index = int(ename.split("_")[1]);
         if(this.start)
         {
            return;
         }
         switch(ename)
         {
            case "close2":
            case "close1":
               ModuleManager.showAppModule("RomanceAtTheEndOfTimeAndSpaceMainPanel");
               break;
            case "btn_" + index:
               this.clickBtn = true;
               if(this.pos > 0)
               {
                  this.updatePanel();
                  return;
               }
               point = new Point();
               point = MainManager.actorModel.parent.globalToLocal(conLevel["btn_" + index].localToGlobal(new Point(0,0)));
               if(conLevel["btn_" + index] && Point.distance(point,MainManager.actorModel.pos) < 50 && Boolean(conLevel["btn_" + index].visible))
               {
                  StatManager.sendStat2014("1025遥望时空尽头的浪漫","点击【光环】","2019运营活动");
                  MainManager.actorModel.stop();
                  MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
                  SocketConnection.sendByQueue(41268,[8,index],function():void
                  {
                     updatePanel();
                  });
               }
               else
               {
                  MainManager.actorModel.moveAndAction(point,function():void
                  {
                     SocketConnection.sendByQueue(41268,[8,index],function():void
                     {
                        updatePanel();
                     });
                  });
               }
               break;
            case "zuodian":
               if(this.dailynum >= 5)
               {
                  Alert.show("今天获得的记忆碎片已经够多了，请明天再来。",function():void
                  {
                     KTool.changeMapWithCallBack(1402,function():void
                     {
                        ModuleManager.showAppModule("RomanceAtTheEndOfTimeAndSpaceMainPanel");
                     });
                  });
                  return;
               }
               this.startDaZuo();
               break;
         }
      }
      
      private function startDaZuo() : void
      {
         var point:Point = null;
         if(!this.dazuoOK && !this.start && 0 == this.pos)
         {
            StatManager.sendStat2014("1025遥望时空尽头的浪漫","点击【打坐】","2019运营活动");
            point = new Point();
            point = MainManager.actorModel.parent.globalToLocal(conLevel["panel1"]["zuodian"].localToGlobal(new Point(0,0)));
            MainManager.actorModel.moveAndAction(point,function():void
            {
               pro = 0;
               conLevel["panel2"].visible = true;
               conLevel["panel2"]["pro"].gotoAndStop(1);
               start = true;
               MainManager.actorModel.walkEnabled = false;
            });
         }
      }
      
      private function timeHandle() : void
      {
         if(this.start)
         {
            ++this.pro;
            if(this.pro > 6 && 6 == conLevel["panel2"]["pro"].currentFrame)
            {
               this.start = false;
               MainManager.actorModel.walkEnabled = true;
               SocketConnection.sendByQueue(41268,[8,9],function():void
               {
                  updatePanel();
               });
               return;
            }
            conLevel["panel2"]["pro"].gotoAndStop(this.pro > 6 ? 6 : this.pro);
         }
      }
      
      private function onMapClick(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
      }
      
      override public function destroy() : void
      {
         if(MapManager.hasEventListener(MapEvent.MAP_MOUSE_DOWN))
         {
            MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
         }
         if(conLevel.hasEventListener(MouseEvent.CLICK))
         {
            conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         }
         SystemTimerManager.removeTickFun(this.timeHandle);
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         super.destroy();
      }
   }
}
