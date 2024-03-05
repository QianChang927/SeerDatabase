package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task426ReUse
   {
      
      private static const TASK_ID_PRE:uint = 1137;
      
      private static const TASK_ID:uint = 426;
      
      private static var _map:BaseMapProcess;
      
      private static var _isGetItem:Boolean;
      
      private static var _stone:MovieClip;
      
      private static var _petId:uint;
      
      private static var _index:uint;
      
      private static var _pet:MovieClip;
      
      private static var _timeStr:String = "9月19日-9月25日11:00—13:00";
      
      public static var _activeTime:Array = [new CronTimeVo("0","11-13","19-25","9","*","2014")];
       
      
      public function Task426ReUse()
      {
         super();
      }
      
      public static function initTaskforMap683(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         (_map.conLevel["boss"] as MovieClip).visible = false;
         if(SystemTimerManager.isActive(_activeTime))
         {
            if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.COMPLETE)
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  startPro();
               });
            }
            else
            {
               initActive();
            }
         }
         else if(TasksManager.getTaskStatus(TASK_ID_PRE) != TasksManager.COMPLETE)
         {
            TasksManager.accept(TASK_ID_PRE,function(param1:Boolean):void
            {
               taskBefore();
            });
         }
         else
         {
            _map.conLevel["pet"].buttonMode = true;
            _map.conLevel["pet"].addEventListener(MouseEvent.CLICK,onPetClick);
         }
      }
      
      private static function onPetClick(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.LAIKE,["丽萨克很少出现，只有在" + _timeStr + "才会经过这里，所以如果你想找到水晶锥，就千万不要错过这个机会哦！"],["太好了，我一定会来的！"]);
      }
      
      private static function taskBefore() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["shuiJing"],1,"mc_1",function():void
         {
            NpcDialog.show(NPC.LAIKE,["紫色水晶石正在慢慢吞噬繁殖精灵的能量，如果再不找到传说中的水晶锥？那么这些繁殖精灵就会彻底消失，怎么办啊！"],["你知道水晶锥在那里吗？"],[function():void
            {
               NpcDialog.show(NPC.LISAKE,["你别废话，我们的责任就是看守这些紫水晶，千万不能有任何闪失！否则我们也会和他们一样，沉睡在水晶石中！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["shuiJing"],2,"mc_2",function():void
                  {
                     NpcDialog.show(NPC.SEER,["看来它们一定知道关于水晶锥的下落，让我去问问看吧！"],["与莱克对话。"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["莱克，你前面说水晶石正在吞噬这些繁殖精灵的能量是真的吗？"],["是啊！我不忍心这样见死不救！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["那你知道怎么找到水晶锥吗？如果有了这个，我想救出这些繁殖精灵应该不在话下！"],["水晶锥..其实就在丽萨克那里！"],[function():void
                           {
                              NpcDialog.show(NPC.LAIKE,["丽萨克很少出现，只有在" + _timeStr + "才会经过这里，所以如果你想找到水晶锥，就千万不要错过这个机会哦！"],["太好了，我一定会来的！"],[function():void
                              {
                                 TasksManager.complete(TASK_ID_PRE,0);
                                 _map.conLevel["pet"].gotoAndStop(1);
                                 _map.conLevel["pet"].buttonMode = true;
                                 _map.conLevel["pet"].addEventListener(MouseEvent.CLICK,onPetClick);
                              }]);
                           }]);
                        }]);
                     }]);
                  });
               });
            }]);
         });
      }
      
      private static function startPro() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["shuiJing"],3,"mc_3",function():void
         {
            NpcDialog.show(NPC.SEER,["丽萨克，可恶的家伙，看我不好好收拾你们！交出水晶锥就饶了你们！"],["与丽萨克对战（获得水晶锥）！"],[function():void
            {
               TasksManager.complete(TASK_ID,0);
               initActive();
            }]);
         });
      }
      
      private static function initActive() : void
      {
         _map.conLevel["shuiJing"].gotoAndStop(1);
         (_map.conLevel["boss"] as MovieClip).visible = true;
         _map.conLevel["boss"].buttonMode = true;
         _map.conLevel["boss"].addEventListener(MouseEvent.CLICK,onBossClick);
         var _loc1_:uint = 0;
         while(_loc1_ < 4)
         {
            ToolTipManager.add(_map.conLevel["stone_" + _loc1_],"紫色水晶");
            _map.conLevel["stone_" + _loc1_].buttonMode = true;
            _map.conLevel["stone_" + _loc1_].addEventListener(MouseEvent.CLICK,onStoneClick);
            _loc1_++;
         }
      }
      
      private static function onStoneClick(param1:MouseEvent) : void
      {
         _stone = param1.currentTarget as MovieClip;
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCheckItem);
         ItemManager.upDateCollection(300413);
      }
      
      private static function onCheckItem(param1:ItemEvent) : void
      {
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCheckItem);
         var _loc2_:SingleItemInfo = ItemManager.getCollectionInfo(300413);
         if(_loc2_)
         {
            SocketConnection.addCmdListener(CommandID.ZISHUIJING_GET_RANDOM_PET,onGetRandomPet);
            SocketConnection.send(CommandID.ZISHUIJING_GET_RANDOM_PET);
         }
         else
         {
            NpcDialog.show(NPC.SEER,["呀！我的水晶锥不够！无法击碎这些紫水晶石，看来是该找丽萨克收集一下了！"],["小家伙，我马上就来救你们！"]);
         }
      }
      
      private static function onGetRandomPet(param1:SocketEvent) : void
      {
         var by:ByteArray;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ZISHUIJING_GET_RANDOM_PET,onGetRandomPet);
         by = e.data as ByteArray;
         _petId = by.readUnsignedInt();
         _index = by.readUnsignedInt();
         AnimateManager.playMcAnimate(_stone,0,"",function():void
         {
            ResourceManager.getResource(ClientConfig.getPetSwfPath(_petId),function(param1:DisplayObject):void
            {
               if(_pet)
               {
                  ToolTipManager.remove(_pet);
                  DisplayUtil.removeForParent(_pet);
                  _pet.removeEventListener(MouseEvent.CLICK,fightWithPet);
                  _pet = null;
               }
               _pet = param1 as MovieClip;
               _pet.x = 590;
               _pet.y = 320;
               _pet.buttonMode = true;
               _pet.addEventListener(MouseEvent.CLICK,fightWithPet);
               ToolTipManager.add(_pet,PetXMLInfo.getName(_petId));
               _map.depthLevel.addChild(_pet);
               DepthManager.swapDepthAll(_map.depthLevel);
               NpcDialog.show(NPC.SEER,["小东西，别怕！我现在就带你走，繁殖精灵不会这么容易灭亡的！"],["捕捉繁殖精灵！"]);
            },"pet");
         });
      }
      
      private static function fightWithPet(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss(PetXMLInfo.getName(_petId),_index);
      }
      
      private static function onBossClick(param1:MouseEvent) : void
      {
         SocketConnection.addCmdListener(CommandID.GET_BOSS_MONSTER,onGetProp);
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightManager.fightWithBoss("丽萨克",13);
      }
      
      private static function onGetProp(param1:SocketEvent) : void
      {
         _isGetItem = true;
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_BOSS_MONSTER,onGetProp);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         _map.conLevel["shuiJing"].gotoAndStop(1);
         if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            if(_isGetItem)
            {
               _isGetItem = false;
               NpcDialog.show(NPC.SEER,["耶，太好了！终于拿到水晶锥了，快去看看繁殖精灵怎么样了，应该还来得及！"],["点击紫色水晶试试！"]);
            }
            else
            {
               NpcDialog.show(NPC.SEER,["呀！我的水晶锥不够！无法击碎这些紫水晶石，看来是该找丽萨克收集一下了！"],["小家伙，我马上就来救你们！"]);
            }
         }
         else
         {
            NpcDialog.show(NPC.SEER,["可恶，竟然会输给你这样的对手，时间不等人，我还要继续努力，来吧！"],["与丽萨克对战（获得水晶锥）！"]);
         }
      }
      
      private static function onError(param1:RobotEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_BOSS_MONSTER,onGetProp);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
      }
      
      public static function destroy() : void
      {
         if(_pet)
         {
            _map.conLevel["pet"].removeEventListener(MouseEvent.CLICK,onPetClick);
            ToolTipManager.remove(_pet);
            DisplayUtil.removeForParent(_pet);
            _pet.removeEventListener(MouseEvent.CLICK,fightWithPet);
            _pet = null;
         }
         _stone = null;
         _map.conLevel["boss"].removeEventListener(MouseEvent.CLICK,onBossClick);
         _map.conLevel["pet"].removeEventListener(MouseEvent.CLICK,onPetClick);
         _map = null;
      }
   }
}
