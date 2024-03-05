package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task801
   {
      
      private static var _mcForMap10053:MovieClip;
      
      private static var _mcForMap685:MovieClip;
      
      private static var _mcForMap686:MovieClip;
      
      private static const TASK_ID:uint = 801;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task801()
      {
         super();
      }
      
      public static function initTaskForMap10053(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap10053 = _map.animatorLevel["task_801_1"];
         _mcForMap10053.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  goStep1();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  goStep2();
               }
               else
               {
                  DisplayUtil.removeForParent(_mcForMap10053);
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_mcForMap10053);
         }
      }
      
      public static function initTaskForMap685(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap685 = _map.animatorLevel["task_801_2"];
         _mcForMap685.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  goStep3();
               }
               else
               {
                  DisplayUtil.removeForParent(_mcForMap685);
               }
            });
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            acceptTask();
         }
         else
         {
            DisplayUtil.removeForParent(_mcForMap685);
         }
      }
      
      public static function initTaskForMap686(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap686 = _map.animatorLevel["task_801_3"];
         _mcForMap686.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  _map.conLevel["sptAnyebinghu"].visible = false;
                  goStep4();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  _map.conLevel["sptAnyebinghu"].visible = false;
                  goStep5();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
               {
                  _map.conLevel["sptAnyebinghu"].visible = false;
                  goStep6();
               }
               else
               {
                  DisplayUtil.removeForParent(_mcForMap10053);
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_mcForMap10053);
         }
      }
      
      private static function initRule(param1:MovieClip, param2:Boolean = false, param3:uint = 1, param4:Boolean = true, param5:Boolean = true, param6:Boolean = true, param7:Boolean = true) : void
      {
         param1.visible = param2;
         param1.gotoAndStop(param3);
         ToolBarController.showOrHideAllUser(param4);
         if(!param5)
         {
            NonoManager.nonoGoHome();
         }
         if(!param6)
         {
            MainManager.selfVisible = false;
         }
         if(!param7)
         {
            OgreController.isShow = false;
         }
      }
      
      public static function acceptTask() : void
      {
         NpcDialog.show(NPC.SEER,["不知道长老和暗夜冰狐怎么样了，好想它们啊！不如去烈焰丛林找它们吧！嘿嘿！"],["立刻前往烈焰丛林！","等等再去！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeLocalMap(10053);
               }
            });
         }]);
      }
      
      public static function goStep1() : void
      {
         initRule(_mcForMap10053,true,1,false,true,true,false);
         NpcDialog.show(NPC.HUOHUZHANGLAO,["哎…事情应该没这么简单，我想0xff0000珀伽索斯0xffffff他不会这么善罢甘休的，真不知道我有生之年能不能保卫0xff0000神狐一族的名誉0xffffff！"],["长老这是怎么了！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["长老…长老…你好像很忧伤啊！发生什么事了吗？0xff0000珀伽索斯0xffffff是谁啊？"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_mcForMap10053,1,"task_801_mc1",function():void
               {
                  NpcDialog.show(NPC.HUOHUZHANGLAO,["小家伙，你有所不知，我太了解0xff0000珀伽索斯0xffffff他的所作所为，他消失了这么久，如今再次出现，一定另有目的！"],["可恶的家伙！"],[function():void
                  {
                     NpcDialog.show(NPC.HUOHUZHANGLAO,["不过我已经派暗夜冰狐出去暗中调查了，相信以它目前的实力应该很快就能找到线索的，我们就耐心等待吧！"],["哇！神狐一族果然犀利！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_mcForMap10053,2,"task_801_mc2",function():void
                        {
                           NpcDialog.show(NPC.HUOHUZHANGLAO,["嗯？暗夜冰狐你说有新发现，快说来听听，看看是不是和我想的一样！"],["事情是这样的！"],[function():void
                           {
                              CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_801_1"),function():void
                              {
                                 NpcDialog.show(NPC.HUOHUZHANGLAO,["什么！神兽谷？？冰狐，你确定你没有听错吗？不可能，决不能让他去那里！"],null,null,false,function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                    {
                                       goStep2();
                                    });
                                 });
                              });
                           }]);
                        });
                     }]);
                  }]);
               });
            });
         }]);
      }
      
      public static function goStep2() : void
      {
         initRule(_mcForMap10053,true,3,false,true,true,false);
         NpcDialog.show(NPC.SEER,["火狐长老，神兽谷是什么地方啊！听起来挺酷的嘛！"],["那是…"],[function():void
         {
            NpcDialog.show(NPC.HUOHUZHANGLAO,["那是只有0xff0000四大神兽0xffffff才能进入的神秘领域，据说那里曾是神兽修炼的地方，想不到神兽谷一直在冰封洞窟深处！"],["哇！那里一定很雄伟吧！"],[function():void
            {
               NpcDialog.show(NPC.HUOHUZHANGLAO,["先不说这些，我们一定要阻止它，不然0xff0000神兽谷0xffffff一定会被它毁掉的！可是我的伤势…."],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap10053,3,"task_801_mc3",function():void
                  {
                     NpcDialog.show(NPC.HUOHUZHANGLAO,["冰狐！！！你绝不能轻举妄动，0xff0000珀伽索斯0xffffff绝不是一个容易对付的对手，它拥有四种不同的能力，你看到的羽毛就是证据！"],["什么！这家伙这么强！"],[function():void
                     {
                        NpcDialog.show(NPC.HUOHUZHANGLAO,["赛尔，这里就拜托你了，我决不能让冰狐去冒险，一旦发生什么不测，冰狐一族就会彻底灭亡了！等0xff0000福克斯0xffffff回来你告诉他，神狐一族由他统领！"],["啊….这里交给我？？？？"],[function():void
                        {
                           AnimateManager.playMcAnimate(_mcForMap10053,4,"task_801_mc4",function():void
                           {
                              NpcDialog.show(NPC.ANYEBINGFU,["赛尔，快想办法把我弄出来，我不能眼睁睁看着长老去冒险，快啊！"],["哦哦，我试试看吧！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_801_2"),function():void
                                 {
                                    _mcForMap10053.gotoAndStop(5);
                                    NpcDialog.show(NPC.SEER,["哇塞！神狐一族也太帅了吧！我可不能错过这次机会，也该是时候和那个该死的珀伽索斯做个了结了！"],["立刻前往冰封洞窟！"],[function():void
                                    {
                                       TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                                       {
                                          if(param1)
                                          {
                                             MapManager.changeMap(685);
                                          }
                                       });
                                    }]);
                                 });
                              }]);
                           });
                        }]);
                     }]);
                  });
               });
            }]);
         }]);
      }
      
      public static function goStep3() : void
      {
         initRule(_mcForMap685,true,1,false);
         AnimateManager.playMcAnimate(_mcForMap685,1,"task_801_mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["哎呀呀~终于赶上了，你们等等我啊！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SANWEIHU,["冰狐，你快看，地上好像有什么线索，看上去好眼熟啊！"],["这些是毛发啊！"],[function():void
               {
                  DisplayUtil.removeForParent(_mcForMap685);
                  CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_801_3"),function():void
                  {
                     NpcDialog.show(NPC.SEER,["不好，我预感应该是和长老有关，希望别出什么大事啊！老天保佑，老天保佑！"],["进入神兽谷！"],[function():void
                     {
                        CommonUI.addYellowArrow(_map.conLevel["door_1"],0,0,300);
                        if(_map.typeLevel["barrier"])
                        {
                           _map.conLevel["door_1"].addEventListener(MouseEvent.CLICK,onDoorClick);
                        }
                        TasksManager.complete(TASK_ID,2);
                     }]);
                  });
               }]);
            });
         });
      }
      
      private static function onDoorClick(param1:MouseEvent) : void
      {
         if(!_map.typeLevel["barrier"].parent)
         {
            _map.conLevel["door_1"].removeEventListener(MouseEvent.CLICK,onDoorClick);
         }
         else
         {
            NpcDialog.show(NPC.SEER,["利用头部射击攻击冰窟上面的冰锥！"]);
         }
      }
      
      public static function goStep4() : void
      {
         initRule(_mcForMap686,true,1,false);
         AnimateManager.playMcAnimate(_mcForMap686,1,"task_801_mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["住手，你这个卑鄙的家伙，你犯下的罪孽还不够深吗？清醒点吧！你是不会得逞的！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.POJIASUOSI,["哪里来的毛小子，竟敢对我出言不逊？难道你不想活了吗？"],["切，我看你才是不知死活呢？"],[function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap686,2,"task_801_mc2",function():void
                  {
                     NpcDialog.show(NPC.POJIASUOSI,["啊哈哈哈！爷爷…你个老家伙竟然还活着，让我送你一程吧！"],["住手，我的忍耐是有限度的！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_mcForMap686,3,"task_801_mc3",function():void
                        {
                           NpcDialog.show(NPC.POJIASUOSI,["哼哼！省省吧你！你真有本事就先过来再说，否则这老家伙的命就算送我啦！哈哈哈…"],["我要想办法过去才行！"],[function():void
                           {
                              CommonUI.addYellowArrow(_map.conLevel["bridge"],200,150,200);
                              _map.conLevel["bridge"].addEventListener(MouseEvent.CLICK,onBridgeTipClick);
                           }]);
                        });
                     }]);
                  });
               }]);
            });
         });
      }
      
      private static function onBridgeTipClick(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(_map.conLevel["bridge"]);
         _map.conLevel["bridge"].removeEventListener(MouseEvent.CLICK,onBridgeTipClick);
      }
      
      public static function onBridge() : void
      {
         NpcDialog.show(NPC.SEER,["耶！终于成功了，这下该是我们露一手的时候了，伙伴们报仇的时刻到了，大家一起上，别让0xff0000珀伽索斯0xffffff有还手的余地！"],["让你尝尝被狂扁的滋味！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_801_4"),function():void
            {
               _mcForMap686.gotoAndStop(4);
               NpcDialog.show(NPC.SEER,["可恶，这家伙简直就是怪物，我们竟然伤不到他！不行，一定有其他办法！"],null,null,false,function():void
               {
                  TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        goStep5();
                     }
                  });
               });
            });
         }]);
      }
      
      public static function goStep5() : void
      {
         initRule(_mcForMap686,true,4,false);
         NpcDialog.show(NPC.SANWEIHU,["冰狐，小心啊！海盗一定早就埋伏在这里了，幸好没什么大事！ "],["神狐一族就这点实力吗？"],[function():void
         {
            NpcDialog.show(NPC.HUOHUZHANGLAO,["孩子，你不能气馁，要相信自己！你一定可以的，激发你的潜能吧！还记得上次你爆发的时候吗？"],["难道是福克斯变成三尾妖狐的时候？？"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap686,4,"task_801_mc4",function():void
               {
                  NpcDialog.show(NPC.POJIASUOSI,["哼哼，连火狐长老都被我击败了，我看你们还有什么筹码能战胜我，不如乖乖下跪求饶吧！说不定我还能放你一马！"],["少做梦了你！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_801_5"),function():void
                     {
                        _mcForMap686.gotoAndStop(5);
                        NpcDialog.show(NPC.POJIASUOSI,["小子，你…你怎么可能拥有这股能量，九尾妖狐？？？难道真的存在，不可能！一定是我的错觉！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SIWEIYAOHU,["游戏才刚刚开始，我不想伤害任何对手，识相的话就离开这里，别让我在看到你，否则后果自负！"],null,null,false,function():void
                           {
                              TasksManager.complete(TASK_ID,4,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    goStep6();
                                 }
                              });
                           });
                        });
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      public static function goStep6() : void
      {
         initRule(_mcForMap686,true,5,false);
         NpcDialog.show(NPC.POJIASUOSI,["哼哼！小子口气别这么大，我这次的目的就是拿会我应得的东西，原本神兽这个称号就该属于我，0xff0000海之子神殿0xffffff中的0xff0000海魂之力0xffffff也是属于我的！"],["什么？神兽、海之子？？"],[function():void
         {
            NpcDialog.show(NPC.POJIASUOSI,["今天就到这里，下次再见面，我可不会轻易放过你们，好好给我记住！ "],["你别走啊！我们再打过！"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap686,5,"task_801_mc5",function():void
               {
                  NpcDialog.show(NPC.SEER,["看来这件事情非比寻常，我一定要把这件事情弄清楚，还有把这些羽毛送给博士研究一下！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SIWEIYAOHU,["恩恩，如果需要帮助就来烈焰丛林找我吧！我们神狐一族一定会出手相助的，现在我该带冰狐回去了！"],["咱们后会有期！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_mcForMap686,6,"task_801_mc6",function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_801_6"),function():void
                           {
                              TasksManager.complete(TASK_ID,5,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DisplayUtil.removeForParent(_mcForMap686);
                                    MainManager.selfVisible = true;
                                    ToolBarController.showOrHideAllUser(true);
                                    _map.conLevel["sptAnyebinghu"].visible = true;
                                 }
                              });
                           });
                        });
                     }]);
                  });
               });
            }]);
         }]);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(_map.conLevel["bridge"])
            {
               _map.conLevel["bridge"].removeEventListener(MouseEvent.CLICK,onBridgeTipClick);
            }
            if(_map.conLevel["door_1"])
            {
               _map.conLevel["door_1"].removeEventListener(MouseEvent.CLICK,onDoorClick);
            }
         }
         _mcForMap10053 = null;
         _mcForMap686 = null;
         _mcForMap685 = null;
         _map = null;
      }
   }
}
