package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_536;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task536
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task536()
      {
         super();
      }
      
      public static function initTask(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var status:uint = uint(TasksManager.getTaskStatus(TaskController_536.TASK_ID));
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_536.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startPro_0();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  startPro_1();
               }
               else
               {
                  DisplayUtil.removeForParent(_map.conLevel["box_btn"]);
                  _map.conLevel["box_btn"] = null;
                  DisplayUtil.removeForParent(_map.conLevel["task_536"]);
                  _map.conLevel["task_536"] = null;
                  DisplayUtil.removeForParent(_map.conLevel["pet_mc_0"]);
                  _map.conLevel["pet_mc_0"] = null;
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["box_btn"]);
            _map.conLevel["box_btn"] = null;
            DisplayUtil.removeForParent(_map.conLevel["task_536"]);
            _map.conLevel["task_536"] = null;
            DisplayUtil.removeForParent(_map.conLevel["pet_mc_0"]);
            _map.conLevel["pet_mc_0"] = null;
            if(status == TasksManager.UN_ACCEPT)
            {
               DisplayUtil.removeForParent(_map.conLevel["pet_mc_1"]);
               _map.conLevel["pet_mc_1"] = null;
            }
            else if(TasksManager.getTaskStatus(537) != TasksManager.COMPLETE)
            {
               ToolTipManager.add(_map.conLevel["pet_mc_1"],"紫炎虫");
               _map.conLevel["pet_mc_1"].buttonMode = true;
               _map.conLevel["pet_mc_1"].addEventListener(MouseEvent.CLICK,onPetClick);
            }
            else
            {
               DisplayUtil.removeForParent(_map.conLevel["pet_mc_1"]);
               _map.conLevel["pet_mc_1"] = null;
            }
         }
      }
      
      private static function onPetClick(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss("紫炎虫",2);
      }
      
      private static function startPro_0() : void
      {
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["pet_mc_1"].visible = false;
         _map.conLevel["no_pet_mc"].visible = false;
         NpcDialog.show(NPC.ZIYANCHONG,["呜呜呜…..谁能救救我，我好害怕啊！这里太恐怖了……"],["嗯？你怎么会在这条河的中间呢？"],[function():void
         {
            NpcDialog.show(NPC.ZIYANCHONG,["嗯？这个，那个…..我非常喜欢跳舞，于是就想去找火山星的舞蹈者学习，我一看这里也是红的，还以为到了火山星呢？所以就……"],["哎呀！这里可不是火山星哦！要是你不小心掉下去可怎么办呀！"],[function():void
            {
               NpcDialog.show(NPC.ZIYANCHONG,["呜呜呜…..那怎么办呀！我知道自己太调皮了，你能帮助我吗？我感觉脚下的东西很快就要沉下去了！我好害怕……"],["别担心，我一定会救你的！（找找附近有什么东西可以帮助它）"],[function():void
               {
                  ToolTipManager.add(_map.conLevel["box_btn"],"木箱");
                  _map.conLevel["box_btn"].buttonMode = true;
                  _map.conLevel["box_btn"].addEventListener(MouseEvent.CLICK,onBoxClick);
               }]);
            }]);
         }]);
      }
      
      private static function onBoxClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(_map.conLevel["task_536"].currentFrame == 1)
         {
            AnimateManager.playMcAnimate(_map.conLevel["task_536"],1,"task_536_1",function():void
            {
               _map.conLevel["task_536"].gotoAndStop(2);
            });
         }
         else if(_map.conLevel["task_536"].currentFrame == 2)
         {
            _map.conLevel["box_btn"].buttonMode = false;
            _map.conLevel["box_btn"].removeEventListener(MouseEvent.CLICK,onBoxClick);
            AnimateManager.playMcAnimate(_map.conLevel["task_536"],2,"task_536_2",function():void
            {
               _map.conLevel["task_536"].gotoAndStop(3);
               NpcDialog.show(NPC.SEER,["找到了，找到了，我已经把这些木块都放在河水中了，你只要轻轻的站在上面慢慢走过来就可以了！"],["呜呜呜呜，我还是好害怕，不敢走！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["对了，我想到了，你等我一会儿啊！千万不要动哦，我去找火山星的舞蹈者，马上就回来！"],["喂喂喂，你去哪里啊！你不救我啦！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["对了，既然它是来找火山星的舞蹈者，也许把它带来会对紫炎虫有些帮助的！我真聪明……"],["（赶快把赤西西比身边跟随吧！）"],[function():void
                     {
                        TasksManager.complete(TaskController_536.TASK_ID,0,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              startPro_1();
                           }
                        });
                     }]);
                  }]);
               }]);
            });
         }
      }
      
      private static function startPro_1() : void
      {
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["task_536"].gotoAndStop(3);
         _map.conLevel["pet_mc_1"].visible = false;
         _map.conLevel["no_pet_mc"].visible = false;
         ToolTipManager.add(_map.conLevel["pet_mc_0"],"紫炎虫");
         _map.conLevel["pet_mc_0"].buttonMode = true;
         _map.conLevel["pet_mc_0"].addEventListener(MouseEvent.CLICK,onPetTaskClick);
      }
      
      private static function onPetTaskClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(MainManager.actorModel.pet)
         {
            if(MainManager.actorModel.pet.info.petID == 335 || MainManager.actorModel.pet.info.petID == 336 || MainManager.actorModel.pet.info.petID == 337)
            {
               _map.conLevel["pet_mc_0"].removeEventListener(MouseEvent.CLICK,onPetTaskClick);
               NpcDialog.show(NPC.ZIYANCHONG,["呀！你怎么来了，我心中的舞蹈家，我好想和你一样能跳舞，你能教我吗？"],["好啊，只要你现在能勇敢的走过来，我一定会教你的！"],[function():void
               {
                  NpcDialog.show(NPC.ZIYANCHONG,["什么？就这样走过来，让我再想想吧！我还是很担心会掉到水里！"],["不用怕，不要看水面，大胆的走过来就可以了！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["是呀！坚强点，相信你一定可以做到的！加油！！"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_536"),function():void
                        {
                           _map.conLevel["pet_mc_0"].visible = false;
                           _map.conLevel["pet_mc_1"].visible = true;
                           _map.conLevel["no_pet_mc"].visible = true;
                           NpcDialog.show(NPC.ZIYANCHONG,["耶！！我终于走过来了，现在想想还是好害怕！谢谢你，善良的小赛尔，是你救了我！"],["呵呵！这是我应该做的，现在你终于能和赤西西比学习跳舞了！"],[function():void
                           {
                              NpcDialog.show(NPC.ZIYANCHONG,["是呀，我好开心，你也来一起学吧！"],["这个，我还要去博士那里报告消息呢！你们玩的开心点吧！"],[function():void
                              {
                                 TasksManager.complete(TaskController_536.TASK_ID,1,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       MapManager.changeMap(5);
                                    }
                                 });
                              }]);
                           }]);
                        });
                     });
                  }]);
               }]);
            }
            else
            {
               NpcDialog.show(NPC.ZIYANCHONG,["咦？你这么快就回来了，你刚刚去哪里了？"],["对了，我要去找赤西西比来帮助你。（记得把赤西西比身边跟随哦）"]);
            }
         }
         else
         {
            NpcDialog.show(NPC.ZIYANCHONG,["咦？你这么快就回来了，你刚刚去哪里了？"],["对了，我要去找赤西西比来帮助你。（记得把赤西西比身边跟随哦）"]);
         }
      }
      
      public static function removeResource(param1:BaseMapProcess) : void
      {
         DisplayUtil.removeForParent(param1.conLevel["box_btn"]);
         param1.conLevel["box_btn"] = null;
         DisplayUtil.removeForParent(param1.conLevel["task_536"]);
         param1.conLevel["task_536"] = null;
         DisplayUtil.removeForParent(param1.conLevel["pet_mc_0"]);
         param1.conLevel["pet_mc_0"] = null;
         DisplayUtil.removeForParent(param1.conLevel["pet_mc_1"]);
         param1.conLevel["pet_mc_1"] = null;
      }
      
      public static function destory() : void
      {
         if(!_map)
         {
            return;
         }
         ToolBarController.showOrHideAllUser(true);
         if(_map.conLevel["box_btn"])
         {
            ToolTipManager.remove(_map.conLevel["box_btn"]);
            _map.conLevel["box_btn"].removeEventListener(MouseEvent.CLICK,onBoxClick);
         }
         if(_map.conLevel["pet_mc_0"])
         {
            ToolTipManager.remove(_map.conLevel["pet_mc_0"]);
            _map.conLevel["pet_mc_0"].removeEventListener(MouseEvent.CLICK,onPetTaskClick);
         }
         if(_map.conLevel["pet_mc_1"])
         {
            ToolTipManager.remove(_map.conLevel["pet_mc_1"]);
            _map.conLevel["pet_mc_1"].removeEventListener(MouseEvent.CLICK,onPetClick);
         }
      }
   }
}
