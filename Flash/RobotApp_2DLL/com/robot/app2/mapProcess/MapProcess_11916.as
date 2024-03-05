package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   
   public class MapProcess_11916 extends BaseMapProcess
   {
      
      public static var isInDialog:Boolean = false;
      
      public static var isInTaskLeave:Boolean = false;
       
      
      private var m_State:int = 0;
      
      private var npcDialog;
      
      public function MapProcess_11916()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.update();
         conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      protected function onClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "aedk_btn":
               this.npcDialog();
               isInDialog = true;
               break;
            case "aemm_btn":
               this.npcDialog();
               isInDialog = true;
               break;
            case "wne_btn":
               this.npcDialog();
               isInDialog = true;
         }
      }
      
      private function update() : void
      {
         KTool.getMultiValue([200343],function(param1:Array):void
         {
            m_State = KTool.subByte(param1[0],(1 - 1) * 8,8);
            updatePanel();
         });
      }
      
      private function updatePanel() : void
      {
         if(this.m_State <= 2)
         {
            conLevel["wne_mc"].visible = true;
            conLevel["wne_mc"].gotoAndStop(1);
            conLevel["aedk_mc"].visible = false;
            conLevel["aemm_mc"].visible = false;
         }
         else if(this.m_State < 5)
         {
            conLevel["wne_mc"].visible = false;
            conLevel["aedk_mc"].visible = true;
            conLevel["aedk_mc"].gotoAndStop(1);
            conLevel["aemm_mc"].visible = false;
         }
         else if(this.m_State < 7)
         {
            conLevel["wne_mc"].visible = false;
            conLevel["aedk_mc"].visible = true;
            conLevel["aedk_mc"].gotoAndStop(2);
            conLevel["aemm_mc"].visible = true;
            conLevel["aemm_mc"].gotoAndStop(1);
         }
         else
         {
            conLevel["wne_mc"].visible = false;
            conLevel["aedk_mc"].visible = true;
            conLevel["aedk_mc"].gotoAndStop(2);
            conLevel["aemm_mc"].visible = true;
            conLevel["aemm_mc"].gotoAndStop(2);
         }
         switch(this.m_State)
         {
            case 0:
               this.npcDialog = this.animation0;
               break;
            case 1:
               this.npcDialog = this.fight1;
               break;
            case 2:
               this.npcDialog = this.animation2;
               break;
            case 3:
               this.npcDialog = this.fight3;
               break;
            case 4:
               this.npcDialog = this.animation4;
               break;
            case 5:
               this.npcDialog = this.pray5;
               break;
            case 6:
               this.npcDialog = this.animation6;
               break;
            case 7:
               this.npcDialog = this.end7;
         }
         if(isInDialog || this.npcDialog == this.end7)
         {
            this.npcDialog();
         }
      }
      
      private function animation0() : void
      {
         isInTaskLeave = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("AwakenGoddessAnim1"),function():void
         {
            m_State = 1;
            SocketConnection.sendByQueue(41285,[38,1],function(param1:*):void
            {
               npcDialog = fight1;
               npcDialog();
            });
         });
      }
      
      private function fight1() : void
      {
         NpcDialog.show(5545,["住手！瓦诺恩，你对月亮做了什么？"],["…"],[function():void
         {
            NpcDialog.show(916,["这不是显而易见的吗？这一次，我们月影军团赢定了！中秋之夜的月能最是可口，想想都忍不住流口水！"],["…"],[function():void
            {
               NpcDialog.show(5545,["死心吧，你们是不会得逞的！"],["…"],[function():void
               {
                  NpcDialog.show(916,["小铁皮，我现在可没功夫陪你玩儿。中秋之夜的月能，月影军团势在必得！"],["休想逃！","等会儿再追！"],[function():void
                  {
                     isInTaskLeave = true;
                     ModuleManager.showAppModule("AwakenGoddess_PrayForMoon_Fight",{"isWNE":true});
                  },function():void
                  {
                  }],false,null,true);
               }],false,null,true);
            }],false,null,true);
         }],false,null,true);
      }
      
      private function animation2() : void
      {
         NpcDialog.show(916,["没想到你这小铁皮还有两下子，赶紧让开，否则别怪我不客气了！"],["…"],[function():void
         {
            NpcDialog.show(5545,["先把月亮上的黑雾散去，否则你哪儿也别想逃！"],["…"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("AwakenGoddessAnim2"),function():void
               {
                  m_State = 3;
                  SocketConnection.sendByQueue(41285,[38,1],function(param1:*):void
                  {
                     npcDialog = fight3;
                     npcDialog();
                  });
               });
            }],false,null,true);
         }],false,null,true);
      }
      
      private function fight3() : void
      {
         conLevel["wne_mc"].visible = false;
         conLevel["aedk_mc"].visible = true;
         conLevel["aedk_mc"].gotoAndStop(1);
         conLevel["aemm_mc"].visible = false;
         NpcDialog.show(5545,["谢谢你，阿尔达克。如果不是你及时赶到，恐怕…！"],["…"],[function():void
         {
            NpcDialog.show(2484,["你没事吧，小赛尔？危险的情况下首先应该保证自己的安全，还好瓦诺恩只是月影军团的一个杂兵。"],["…"],[function():void
            {
               NpcDialog.show(5545,["我没事，只是可惜让它逃跑了！"],["…"],[function():void
               {
                  NpcDialog.show(2484,["它们还会再来的，最近是月吟仪式举行的日子，它们不会放过这个机会。"],["…"],[function():void
                  {
                     NpcDialog.show(5545,["哦对了，阿尔达克，你快看看月亮的情况。我刚刚来的时候，刚好撞见瓦诺恩朝着月亮释放了一团黑雾…"],["…"],[function():void
                     {
                        NpcDialog.show(2484,["唔…我瞧瞧……不好，这团黑雾会不断的侵蚀月亮的能量，我得赶紧驱散！"],["我来帮你吧！"],[function():void
                        {
                           NpcDialog.show(2484,["有你帮忙自然是好的，只是这团黑雾可没有那么简单，万一你不慎陷入其中怎么办？保险起见，我要考验一下你。"],["来吧！我可不怕！"],[function():void
                           {
                              isInTaskLeave = true;
                              ModuleManager.showAppModule("AwakenGoddess_PrayForMoon_Fight",{"isWNE":false});
                           }],false,null,true);
                        }],false,null,true);
                     }],false,null,true);
                  }],false,null,true);
               }],false,null,true);
            }],false,null,true);
         }],false,null,true);
      }
      
      private function animation4() : void
      {
         NpcDialog.show(2484,["既然你能完成我的挑战，那看来你还是有点实力的，我们现在就开始吧！"],["好！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("AwakenGoddessAnim3"),function():void
            {
               m_State = 5;
               SocketConnection.sendByQueue(41285,[38,1],function(param1:*):void
               {
                  npcDialog = pray5;
                  npcDialog();
               });
            });
         }],false,null,true);
      }
      
      private function pray5() : void
      {
         NpcDialog.show(5545,["阿尔莫莫，你来了！这次又是月影军团搞的鬼，快来和我们一起驱散这团黑雾！"],["…"],[function():void
         {
            NpcDialog.show(2895,["我观察过了，这团黑雾具有特殊的凝聚力，仅凭借我们普通的风力和月光是无法驱散的。看来只有满月女神的圣光才能将其完全消散了！"],["…"],[function():void
            {
               NpcDialog.show(5545,["满月女神？那是谁？以前怎么从来没听说过…"],["…"],[function():void
               {
                  NpcDialog.show(2895,["很久以前，月影军团和月光兽一族曾爆发过一场旷世大战。那一战中，满月女神以自身全部的力量守护了月亮。"],["…"],[function():void
                  {
                     NpcDialog.show(2895,["自此之后满月女神便一直沉睡在月亮中，靠着月华滋养。只有在满月之时，月能最强大的时候才有可能苏醒…"],["…"],[function():void
                     {
                        NpcDialog.show(2484,["虽然现在还不是满月之时，但情况危急，再这样下去月亮迟早会被这团黑雾吞噬掉。或许我们虔诚的祈祷能够一试。"],["好的！"],[function():void
                        {
                           isInTaskLeave = true;
                           ModuleManager.showAppModule("AwakenGoddess_PrayForMoon_Pray");
                        }],false,null,true);
                     }],false,null,true);
                  }],false,null,true);
               }],false,null,true);
            }],false,null,true);
         }],false,null,true);
      }
      
      private function animation6() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("AwakenGoddessAnim4"),function():void
         {
            m_State = 7;
            isInTaskLeave = false;
            SocketConnection.sendByQueue(41285,[38,1],function(param1:*):void
            {
               npcDialog = end7;
               npcDialog();
            });
         });
      }
      
      private function end7() : void
      {
         isInTaskLeave = false;
         var curDate:Date = SystemTimerManager.sysDate;
         if(curDate.hours < 20)
         {
            Alarm.show("你已完成了月光祈祷，今晚20:00后再来参与月亮保卫战吧！",function():void
            {
               ModuleManager.showAppModule("AwakenGoddessMainPanel");
            });
         }
         else
         {
            ModuleManager.showAppModule("AwakenGoddessMainPanel");
         }
         conLevel["wne_mc"].visible = false;
         conLevel["aedk_mc"].visible = true;
         conLevel["aedk_mc"].gotoAndStop(2);
         conLevel["aemm_mc"].visible = true;
         conLevel["aemm_mc"].gotoAndStop(2);
      }
      
      override public function destroy() : void
      {
         if(isInTaskLeave == false)
         {
            SocketConnection.sendByQueue(41285,[38,6],function(param1:*):void
            {
            });
         }
         conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         super.destroy();
      }
   }
}
