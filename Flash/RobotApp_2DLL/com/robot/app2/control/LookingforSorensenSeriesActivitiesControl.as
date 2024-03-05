package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LookingforSorensenSeriesActivitiesControl
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static const BUFFERID1:uint = 1343;
      
      private static const BUFFERID2:uint = 1344;
      
      private static var _itemNum:int;
      
      private static var _compeleteNum:int;
       
      
      public function LookingforSorensenSeriesActivitiesControl()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         if(MapManager.currentMap.id != 1212)
         {
            MapManager.changeMapWithCallback(1212,function():void
            {
               initView();
            });
         }
         else
         {
            initView();
         }
      }
      
      public static function destroy() : void
      {
         DisplayUtil.removeForParent(taskMc);
      }
      
      private static function initView() : void
      {
         DisplayUtil.removeForParent(taskMc);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_lookingforSorensenSeriesActivities"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(taskMc);
            update();
         });
      }
      
      private static function onMcClick(param1:MouseEvent) : void
      {
         _map.btnLevel["mc"].visible = false;
         switch(_compeleteNum)
         {
            case 0:
               onEqClick1();
               break;
            case 1:
               if(!BufferRecordManager.getMyState(BUFFERID1))
               {
                  onEqClick2();
               }
               else
               {
                  _map.btnLevel["mc"].visible = true;
                  onEqClick21();
               }
               break;
            case 2:
               if(!BufferRecordManager.getMyState(BUFFERID2))
               {
                  onEqClick3();
               }
               else
               {
                  _map.btnLevel["mc"].visible = true;
                  onEqClick33();
               }
         }
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([4482],function(param1:Array):void
         {
            _compeleteNum = param1[0];
            _map.btnLevel["mc"].gotoAndStop(_compeleteNum + 1);
            _map.btnLevel["mc"].btn.addEventListener(MouseEvent.CLICK,onMcClick);
            KTool.hideMapAllPlayerAndMonster();
            switch(_compeleteNum)
            {
               case 0:
                  break;
               case 1:
                  if(BufferRecordManager.getMyState(BUFFERID1))
                  {
                     _map.btnLevel["mc"].gotoAndStop(4);
                     _map.btnLevel["mc"].btn.addEventListener(MouseEvent.CLICK,onMcClick);
                     DisplayUtil.removeForParent(taskMc);
                     KTool.showMapAllPlayerAndMonster();
                  }
                  else
                  {
                     taskMc.gotoAndStop(1);
                     taskMc.mc1.gotoAndStop(811);
                  }
                  break;
               case 2:
                  if(BufferRecordManager.getMyState(BUFFERID2))
                  {
                     _map.btnLevel["mc"].gotoAndStop(5);
                     _map.btnLevel["mc"].btn.addEventListener(MouseEvent.CLICK,onMcClick);
                     taskMc.gotoAndStop(3);
                     taskMc.mc3.gotoAndStop(545);
                  }
                  else
                  {
                     taskMc.gotoAndStop(3);
                     taskMc.mc3.gotoAndStop(545);
                  }
            }
         });
         ItemManager.updateItems([1711289],function():void
         {
            var _loc1_:Array = new Array();
            _loc1_[0] = ItemManager.getNumByID(1711289);
            _itemNum = _loc1_[0];
         });
      }
      
      private static function playMc(param1:int) : void
      {
         var index:int = param1;
         DisplayUtil.removeForParent(taskMc);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_lookingforSorensenSeriesActivities"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            startPreTask(index);
         });
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         _map.btnLevel["mc"].visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            ToolBarController.panel.visible = true;
            if(index == 1)
            {
               onDialog1();
            }
            else if(index == 2)
            {
               _map.btnLevel["mc"].visible = true;
               BufferRecordManager.setMyState(BUFFERID1,true,function():void
               {
                  DisplayUtil.removeForParent(taskMc);
                  KTool.showMapAllPlayerAndMonster();
                  update();
               });
            }
            else if(index == 3)
            {
               SocketConnection.addCmdListener(46270,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  SocketConnection.removeCmdListener(46270,arguments.callee);
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("LookingforSorensenSeriesActivitiesMainPanel"),"正在打开....");
                     Alarm2.show("恭喜你！完成第二关卡！请前往第三关卡吧！");
                  });
               });
               SocketConnection.send(46270,1,2);
            }
            else if(index == 4)
            {
               SocketConnection.addCmdListener(46270,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  SocketConnection.removeCmdListener(46270,arguments.callee);
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("LookingforSorensenSeriesActivitiesMainPanel"),"正在打开....");
                     Alarm2.show("恭喜你！完成第三关卡！现在可以打开《魔域风尘录》了！");
                  });
               });
               SocketConnection.send(46270,1,3);
            }
         };
         storyPlayer.start();
      }
      
      private static function onEqClick1() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["真没有想到，你这么快就赶了过来。我现在站的位子，就是索伦森以前所站的位子。"],["然后呢？"],[function():void
         {
            NpcDialog.show(NPC.SEER,["他现在不是已经不在了吗？你查出了点什么吗？"],["小声点！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["船长是让你来协助我工作，不是让你来监督我工作的！你进来的时候，有没有感受到一种……无形的压力？"],["这倒没有，我感觉这里通风还蛮好的。"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["不过从这里的现在的环境来看，索伦森肯定已经早都放弃这里了，为什么你们一定要调查他是否复活了呢？"],["你问题真多，好吧，那我回答你！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["因为没有什么精灵可以弥散出那种特殊的黑暗之气。王之战联也认为，极有可能是索伦森复活！当然也不排除，其他更为强大的精灵！"],["哦……那我们从这里开始调查吗？"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["是的，索伦森就是从这里开始发迹！所以我才选择这里作为第一站，别傻站着，我们一起来找找看线索！"],["好！"],[function():void
                        {
                           playMc(1);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function onDialog1() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["这是？！"],["好奇怪的……像是镜子碎片！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["这个魔域，果然隐藏着玄机。"],["我似乎明白了什么。"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["索伦森在离开之前，应该将自己的一缕魔力封印在了这里。我们刚才，恐怕就是触动了这个机关。"],["那他为什么要这么做？"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["只是单纯的向以后来到这里的精灵，证明自己的决心吗？但是感觉……没有这么简单。"],["嗯…....我们能不能恢复这个类似镜子的碎片？"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["我倒是知道一个古老的方法，类似的灵物破碎，可以用血液粘胶进行修复！"],["血液粘胶？"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["这是一种特殊的胶水，是用精灵的血液制作而成，嘻嘻……据说可以把你灵魂如果破碎，都能黏在一起哦！"],["……能行吗，这个？"],[function():void
                        {
                           SocketConnection.addCmdListener(46270,function(param1:SocketEvent):void
                           {
                              var e:SocketEvent = param1;
                              SocketConnection.removeCmdListener(46270,arguments.callee);
                              MapManager.changeMapWithCallback(1,function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("LookingforSorensenSeriesActivitiesMainPanel"),"正在打开....");
                                 Alarm2.show("恭喜你完成第一关卡！请前往第二关吧！");
                              });
                           });
                           SocketConnection.send(46270,1,1);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function onEqClick2() : void
      {
         NpcDialog.show(NPC.SEER,["我怎么帮你？"],["你去收集些精灵之血，剩下的，交给我吧！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["你……你还会制作这种……东西？"],["当然会！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["学习使我快乐，科技改变生活。"],["可是这里没有精灵啊！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["没有精灵……哪来的精灵之血！"],["我们可以引诱一些精灵。"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["用特殊的气味刺激到一些低等精灵的神经系统。一旦他们出现了，你记得及时收集。"],["要多少？"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["20个精灵之血就好。"],["好的！"],[function():void
                        {
                           playMc(2);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function onEqClick21() : void
      {
         if(_itemNum >= 20)
         {
            playMc(3);
         }
         else
         {
            NpcDialog.show(NPC.SAIXIAOXI,["唔……我数数，你一共收集了" + _itemNum + "/20个精灵之血。还不够，抓紧时间吧！"],["好！"],[function():void
            {
            }]);
         }
      }
      
      private static function onEqClick3() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["快！快看！居然出现了一个一模一样的我！"],["……暗黑战联，是不是就是依靠这个东西，复制出来的？"],[function():void
         {
            NpcDialog.show(NPC.SEER,["有点像地球上流传的双鱼玉佩一样。"],["他为什么一动不动？"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["如果真的这个“镜子”有复制功能，那他应该跟我具备同样的能力，虽然外表看起来一样帅气和个性，但是不知道……"],["不知道什么？"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["内心是不是一样得懒散和……"],["好了，你不要说了。"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["也许这个“镜子”如你所说，真的是复制战神联盟的神器…..但，为什么出现的不是暗黑版赛小息……"],["我也在思索这个问题。"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["也可能是索伦森离开已久，魔力散去？"],["不。"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["之前索伦森的那一缕魔法，想必就是蕴含在其中！问题有点复杂，你先去和他对话看看。"],["好。"],[function():void
                           {
                              CommonUI.addYellowArrow(taskMc,taskMc.btnMc3.x + 50,taskMc.btnMc3.y - 10,45);
                              taskMc.btnMc3.addEventListener(MouseEvent.CLICK,onEqClick32);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function onEqClick32(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         CommonUI.removeYellowArrow(taskMc);
         taskMc.btnMc3.removeEventListener(MouseEvent.CLICK,onEqClick32);
         NpcDialog.show(NPC.SAIXIAOXI,["你们好。"],["我……你好！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["你们已经见识到了这神器的威力，他可以复制凝视他的任何物体！"],["你到底是谁？"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["你是不是索伦森！"],["我不是。"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["索伦森离开魔域后，确实将一缕魔法留在了我这里。不过也已经被你们所看到。准确的说，除了索伦森的那一缕魔法，这里再无他的气息。"],["那你想做什么……"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["我想做什么？哈哈哈！当然是获得一个身体！离开这里！"],["……击败他！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["如果你击败了我，神器就会彻底破碎！如果你们保护我，我就可以帮你们制造更多的复制体，到时候…..这个宇宙，哈哈哈！"],["快！击败他！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["我已经听不下去了！立刻动手！这是命令！"],["好!","不不，神器还是蛮好用的嘛！"],[function():void
                           {
                              BufferRecordManager.setMyState(BUFFERID2,true,function():void
                              {
                                 _map.btnLevel["mc"].visible = true;
                              });
                              FightManager.fightNoMapBoss("光之子·米瑞斯",8242,false,true,function():void
                              {
                                 initToMap();
                                 if(FightManager.isWin)
                                 {
                                    playMc(4);
                                 }
                              });
                           },function():void
                           {
                              BufferRecordManager.setMyState(BUFFERID2,true,function():void
                              {
                                 _map.btnLevel["mc"].visible = true;
                              });
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function onEqClick33() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["我已经听不下去了！立刻动手！这是命令！"],["好!","不不，神器还是蛮好用的嘛！"],[function():void
         {
            FightManager.fightNoMapBoss("光之子·米瑞斯",8242,false,true,function():void
            {
               if(FightManager.isWin)
               {
                  playMc(4);
               }
            });
         },function():void
         {
         }]);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
   }
}
