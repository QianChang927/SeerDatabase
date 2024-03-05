package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.Utils;
   
   public class SummerWelfareActivitiesAController
   {
      
      public static var _map:BaseMapProcess;
      
      public static var _isLmit:Boolean = false;
      
      public static var _surplusTime:int;
      
      private static var _curMapId:int;
      
      private static var _index:int;
       
      
      public function SummerWelfareActivitiesAController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         _curMapId = MapManager.currentMap.id;
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
         var _loc2_:int = 1;
         while(_loc2_ < 3)
         {
            _map.conLevel["mc_" + _loc2_].visible = false;
            _map.conLevel["mc_" + _loc2_].buttonMode = true;
            _loc2_++;
         }
         _map.conLevel["petMc"].buttonMode = true;
         update();
      }
      
      public static function onClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var event:MouseEvent = param1;
         switch(event.target.name)
         {
            case "petMc":
               if(!_isLmit)
               {
                  FightManager.fightNoMapBoss("",7228,false,true,function():void
                  {
                  });
               }
               else
               {
                  Alarm2.show("今日获得心愿灯的数目已经达到上限哦，赶快去放飞吧！");
               }
               break;
            case "mc_0":
               if(!_isLmit)
               {
                  SocketConnection.addCmdListener(42266,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(42266,arguments.callee);
                     update();
                  });
                  SocketConnection.send(42266,5,_index + 1);
               }
               else
               {
                  Alarm2.show("今日获得心愿灯的数目已经达到上限哦，赶快去放飞吧！");
               }
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
               break;
            case "closeBtn":
               MapManager.changeMap(1);
               break;
            case "btn_0":
               MapManager.changeMap(11263);
               break;
            case "btn_1":
               MapManager.changeMap(11264);
               break;
            case "btn_2":
               MapManager.changeMap(11265);
               break;
            case "btn_3":
               MapManager.changeMap(11266);
               break;
            case "wishBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("SummerWelfareActivitiesAMainPanel"),"正在打开....");
         }
      }
      
      public static function update() : void
      {
         var nowTime:Number = NaN;
         var arr:Array = [11263,11264,11265,11266];
         _index = arr.indexOf(_curMapId);
         nowTime = Number(SystemTimerManager.time);
         KTool.getMultiValue([100550,100551,100552,100553],function(param1:Array):void
         {
            var _loc2_:int = int(nowTime - param1[_index]);
            if(_loc2_ < 0)
            {
               _loc2_ = 0;
            }
            _surplusTime = 2 * 60 - _loc2_;
            if(_surplusTime <= 0)
            {
               _map.conLevel["mc_" + 0].visible = true;
               SystemTimerManager.removeTickFun(onTime);
            }
            else
            {
               _map.conLevel["mc_" + 0].visible = false;
               SystemTimerManager.addTickFun(onTime);
            }
         });
         KTool.getMultiValue([18047],function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            if(param1[0] >= 30)
            {
               _isLmit = true;
            }
            else
            {
               _isLmit = false;
            }
            _map.conLevel["canGetNumTx"].text = String(30 - _loc2_);
         });
         ItemManager.updateItems([1709784],function():void
         {
            var _loc1_:Array = new Array();
            _loc1_[0] = ItemManager.getNumByID(1709784);
            _map.conLevel["itemNumTx"].text = String(_loc1_[0]);
         });
      }
      
      private static function onTime() : void
      {
         --_surplusTime;
         if(_surplusTime <= 0)
         {
            update();
         }
      }
      
      public static function destroy() : void
      {
         SystemTimerManager.removeTickFun(onTime);
         _map.conLevel.removeEventListener(MouseEvent.CLICK,onClick);
      }
   }
}
