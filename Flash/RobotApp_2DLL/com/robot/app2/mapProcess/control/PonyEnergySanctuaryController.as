package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcController;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class PonyEnergySanctuaryController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const DAILY_FIGHT_STATE:int = 15791;
      
      private static const BIT_BUF_HAS_ENABLED_SKILL:int = 17720;
       
      
      public function PonyEnergySanctuaryController()
      {
         super();
      }
      
      public static function initMap1106(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      public static function destroyMap1106() : void
      {
         _map.conLevel.removeEventListener(MouseEvent.CLICK,onClick);
         _map = null;
      }
      
      public static function checkFinish(param1:Function) : void
      {
         var notFun:Function = param1;
         KTool.getLimitNum(DAILY_FIGHT_STATE,function(param1:int):void
         {
            if((param1 ^ (1 << 10) - 1) == 0)
            {
               playMovie("pass_pony_energy_sanctuary_movie",22848);
            }
            else
            {
               notFun();
            }
         });
      }
      
      public static function playMovie(param1:String, param2:int, param3:Function = null) : void
      {
         var movie:String = param1;
         var bitBuf:int = param2;
         var fun:Function = param3;
         if(BitBuffSetClass.getState(bitBuf))
         {
            if(fun != null)
            {
               fun();
            }
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl(movie),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               KTool.hideMapAllPlayerAndMonster();
               NpcController.npcVisible = false;
               MapObjectControl.hideOrShowAllObjects(false);
               MapManager.currentMap.controlLevel.addChild(mc);
               AnimateManager.playMcAnimate(mc,1,"mc1",function():void
               {
                  KTool.showMapAllPlayerAndMonster();
                  NpcController.npcVisible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  MapManager.currentMap.controlLevel.removeChild(mc);
                  BitBuffSetClass.setState(bitBuf,1);
                  if(fun != null)
                  {
                     fun();
                  }
               });
            });
         }
      }
      
      private static function check(param1:Function) : void
      {
         var fun:Function = param1;
         KTool.getBitSet([BIT_BUF_HAS_ENABLED_SKILL],function(param1:Array):void
         {
            if(param1[0] > 0)
            {
               Alarm.show("你已成功解除谱尼的封印，之后可继续点击能量圣殿的兑换装置兑换其他奖励！");
            }
            else
            {
               fun();
            }
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var name:String = String(e.target.name);
         if(name == "btnPony")
         {
            check(function():void
            {
               ModuleManager.showAppModule("PonyEnergySanctuaryMainPanel");
            });
         }
         else if(name == "btnTreasure")
         {
            ModuleManager.showAppModule("PonyEnergySanctuaryExchangePanel");
         }
      }
   }
}
