package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.CollectionComponet;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   
   public class ResuscitateShenyuQishiController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var lengths:int;
      
      private static var collection:CollectionComponet;
       
      
      public function ResuscitateShenyuQishiController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         switch(MapManager.currentMap.id)
         {
            case 11278:
               task1();
               break;
            case 11279:
               task2();
               break;
            case 11280:
               task3();
         }
      }
      
      private static function task3() : void
      {
         var player:PlayAnimationComponent = null;
         player = new PlayAnimationComponent("ResuscitateShenyuQishi_mapAnimate",function():void
         {
            player.destroy();
            player = null;
            SocketConnection.sendByQueue(47308,[4,0],function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               Alarm.show("恭喜你完成了全部任务！");
               SocketConnection.sendByQueue(47308,[5,0]);
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showAppModule("ResuscitateShenyuQishiMainPanel");
               });
            });
         },5);
      }
      
      private static function task2(param1:SocketEvent = null) : void
      {
         var clickSageluosi:Function = null;
         var openModule:Function = null;
         var player:PlayAnimationComponent = null;
         var e:SocketEvent = param1;
         clickSageluosi = function(param1:MouseEvent):void
         {
            if(lengths > 0)
            {
               NpcDialogNew_1.show(NPC.SAGELUOSI_KING,["你已经收集到了" + (10 - lengths) + "/10个克洛伊的魂魄，请继续。"],["好！","我想暂时离开这里。"],[null,leftMap]);
            }
            else
            {
               NpcDialogNew_1.show(NPC.SAGELUOSI_KING,["你需要我什么帮助？"],["我想再次启动光火之力的融合！","我想暂时离开这里。"],[openModule,leftMap]);
            }
         };
         openModule = function():void
         {
            ModuleManager.showAppModule("ResuscitateShenyuQishiClickPanel");
         };
         if(BitBuffSetClass.getState(23223) == 0)
         {
            player = new PlayAnimationComponent("ResuscitateShenyuQishi_mapAnimate",function():void
            {
               player.destroy();
               player = null;
               task2();
            },3);
            BitBuffSetClass.setState(23223,1);
            return;
         }
         KTool.getMultiValue([2842],function(param1:Array):void
         {
            var arr:Array = param1;
            lengths = 10 - arr[0];
            var j:int = 1;
            while(j <= 10)
            {
               _map.depthLevel["fireMc_" + j].visible = j <= lengths;
               j++;
            }
            if(collection == null)
            {
               collection = new CollectionComponet(_map.depthLevel,3000,lengths,function(param1:int):void
               {
                  SocketConnection.sendByQueue(47308,[2,0]);
                  _map.depthLevel["fireMc_" + param1].visible = false;
                  --lengths;
                  if(lengths == 0)
                  {
                     openModule();
                  }
               },function(param1:MouseEvent):void
               {
                  collection.start();
               },"fireMc_");
            }
            _map.depthLevel["sageluosiBtn"].addEventListener(MouseEvent.CLICK,clickSageluosi);
         });
      }
      
      public static function task2End() : void
      {
         var player:PlayAnimationComponent = null;
         player = new PlayAnimationComponent("ResuscitateShenyuQishi_mapAnimate",function():void
         {
            player.destroy();
            player = null;
            MapManager.changeMapWithCallback(1,function():void
            {
               BonusController.showDelayBonus(1987);
               Alarm.show("现在你已经融合成功了光火之力，请继续你的任务！");
               ModuleManager.showAppModule("ResuscitateShenyuQishiMainPanel");
            });
         },4);
      }
      
      private static function task1() : void
      {
         var player:PlayAnimationComponent = null;
         if(BitBuffSetClass.getState(23222) == 0)
         {
            player = new PlayAnimationComponent("ResuscitateShenyuQishi_mapAnimate",function():void
            {
               player.destroy();
               player = null;
            });
            BitBuffSetClass.setState(23222,1);
         }
         update1();
      }
      
      private static function update1(param1:SocketEvent = null) : void
      {
         var e:SocketEvent = param1;
         var taskEnd:Function = function():void
         {
            var player:PlayAnimationComponent = null;
            player = new PlayAnimationComponent("ResuscitateShenyuQishi_mapAnimate",function():void
            {
               player.destroy();
               player = null;
               MapManager.changeMapWithCallback(1,function():void
               {
                  BonusController.showDelayBonus(1987);
                  Alarm.show("你可以前往光火神殿开始下一个任务了！");
                  ModuleManager.showAppModule("ResuscitateShenyuQishiMainPanel");
               });
            },2);
         };
         KTool.getMultiValue([2843],function(param1:Array):void
         {
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               CommonUI.removeYellowArrow(_map.depthLevel["npcBtn_" + _loc2_]);
               if(KTool.getBit(param1[0],_loc2_ + 1) == 0)
               {
                  _map.depthLevel["npcBtn_" + _loc2_].buttonMode = true;
                  _map.depthLevel["npcBtn_" + _loc2_].mouseChildren = false;
                  CommonUI.addYellowArrow(_map.depthLevel["npcBtn_" + _loc2_],36,-5);
                  if(!_map.depthLevel["npcBtn_" + _loc2_].hasEventListener(MouseEvent.CLICK))
                  {
                     _map.depthLevel["npcBtn_" + _loc2_].addEventListener(MouseEvent.CLICK,onTask1Click);
                  }
               }
               else
               {
                  _map.depthLevel["npcBtn_" + _loc2_].buttonMode = false;
                  _map.depthLevel["npcBtn_" + _loc2_].mouseEnabled = false;
                  _map.depthLevel["npcBtn_" + _loc2_].mouseChildren = false;
                  if(_map.depthLevel["npcBtn_" + _loc2_].hasEventListener(MouseEvent.CLICK))
                  {
                     _map.depthLevel["npcBtn_" + _loc2_].removeEventListener(MouseEvent.CLICK,onTask1Click);
                  }
               }
               _loc2_++;
            }
            if(param1[0] == 15)
            {
               taskEnd();
            }
         });
      }
      
      private static function onTask1Click(param1:MouseEvent) : void
      {
         var i:int = 0;
         var sendSocket:Function = null;
         var e:MouseEvent = param1;
         sendSocket = function():void
         {
            BonusController.addDelay(1987);
            SocketConnection.sendByQueue(47308,[1,i + 1],update1);
         };
         i = int(e.target.name.replace("npcBtn_",""));
         switch(i)
         {
            case 0:
               NpcDialog.show(NPC.SHIPER,["神谕龙骑用尽自己所有的力量后，很自然的又回到克洛伊和圣耀天龙的精灵状态，但是这一次，我们恐怕无法借助谱尼和朱雀的力量，因为他们决定不插手宇宙的事情。"],["明白！","我想暂时离开一下！"],[sendSocket,leftMap]);
               break;
            case 1:
               NpcDialog.show(NPC.JUSTIN,["大暗黑天这次袭来，我们赛尔号必须有所准备，我们届时将会派一个精灵助你前往光火神殿，那里就是你要执行任务的地方。"],["明白！","我想暂时离开一下！"],[sendSocket,leftMap]);
               break;
            case 2:
               NpcDialog.show(NPC.DOCTOR,["我从宇宙元素身上提取出了特殊的一种力量，让你不必忍受极光和烈火。你需要在光火神殿，寻找到克洛伊的所有魂魄！"],["明白！","我想暂时离开一下！"],[sendSocket,leftMap]);
               break;
            case 3:
               NpcDialog.show(NPC.DIEN,["为了你的安危，王•萨格罗斯会陪你一起出行，收集到全部魂魄后，记得要将他们融合。融合成功后，克洛伊和圣耀天龙，将会复活。"],["明白！","我想暂时离开一下！"],[sendSocket,leftMap]);
         }
      }
      
      private static function leftMap() : void
      {
         Alert.show("你确定要离开当前场景吗？",function():void
         {
            MapManager.changeMapWithCallback(1,function():void
            {
               ModuleManager.showAppModule("ResuscitateShenyuQishiMainPanel");
            });
         });
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         switch(MapManager.currentMap.id)
         {
            case 11278:
               _loc1_ = 0;
               while(_loc1_ < 4)
               {
                  if(_map.depthLevel["npcBtn_" + _loc1_].hasEventListener(MouseEvent.CLICK))
                  {
                     _map.depthLevel["npcBtn_" + _loc1_].removeEventListener(MouseEvent.CLICK,onTask1Click);
                  }
                  _loc1_++;
               }
               break;
            case 11279:
               if(collection != null)
               {
                  collection.destroy();
                  collection = null;
               }
         }
      }
   }
}
