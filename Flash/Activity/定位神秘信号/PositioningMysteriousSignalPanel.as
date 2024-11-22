package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PositioningMysteriousSignalPanel extends ActivityModel
   {
      private var forever_125166:int;
      
      private var bit_1000635:Boolean;
      
      private var daily_207080:int;
      
      private var _num:TextField;
      
      private var result1:int;
      
      private var result:int;
      
      public function PositioningMysteriousSignalPanel()
      {
         super();
         resUrl = "2024/1122/PositioningMysteriousSignalPanel";
         configUrl = "2024/1122/PositioningMysteriousSignal";
      }
      
      override public function show() : void
      {
         super.show();
         _ui["page1"].visible = false;
         _ui["page2"].visible = false;
         _ui["curNum"].text = "";
         this._num = _ui["curNum"];
         this._num.restrict = "0-9";
         this._num.maxChars = 2;
      }
      
      override protected function updatePanel() : void
      {
         this.forever_125166 = getValue("forever_125166");
         this.bit_1000635 = getValue("bit_1000635");
         this.daily_207080 = getValue("daily_207080");
         if(this.daily_207080 == 0 && this.bit_1000635 == false && this.forever_125166 != 3)
         {
            doAction("FlgeReq1",0).then(refresh);
         }
         this.updateDisplay();
         if(BitBuffSetClass.getState(24521) == 0)
         {
            BitBuffSetClass.setState(24521,1);
            Alert.show("完成剧情《云霄星异动》后参与活动体验更加，是否前往完成主线任务？",function():void
            {
               hide();
               ModuleManager.showAppModule("MapStorySeriesGuide");
            });
         }
      }
      
      private function updateDisplay() : void
      {
         var i:int;
         _ui["mcc"].gotoAndStop(1);
         if(this.forever_125166 >= 3)
         {
            _ui["mc"].gotoAndStop(2);
            _ui["mccc"].gotoAndStop(2);
         }
         else if(this.bit_1000635 == true)
         {
            _ui["mc"].gotoAndStop(3);
            _ui["mccc"].gotoAndStop(3);
         }
         else
         {
            _ui["mc"].gotoAndStop(1);
            _ui["mccc"].gotoAndStop(1);
         }
         for(i = 1; i <= 3; i++)
         {
            if(this.forever_125166 >= i)
            {
               _ui["flag_" + i].visible = true;
            }
            else
            {
               _ui["flag_" + i].visible = false;
            }
         }
         if(this.forever_125166 >= 3)
         {
            _ui["curNum"].mouseEnabled = false;
            _ui["curNum"].text = "";
         }
         if(this.bit_1000635 == true)
         {
            _ui["curNum"].mouseEnabled = false;
            doAction("FlgeReq1",100).then(function(e:SocketEvent):void
            {
               result1 = ByteArray(e.data).readInt();
               _ui["curNum"].text = result1;
            });
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var tempInt:int = 0;
         var i:int = 0;
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("MapStorySeriesGuide");
               break;
            case "openBtn":
               _ui["page2"].visible = true;
               for(i = 1; i <= 3; i++)
               {
                  if(this.forever_125166 >= i)
                  {
                     _ui["page2"]["mc_" + i].gotoAndStop(1);
                  }
                  else
                  {
                     _ui["page2"]["mc_" + i].gotoAndStop(2);
                  }
               }
               break;
            case "pageBtn_" + index:
               _ui["page1"].visible = true;
               _ui["page2"].visible = false;
               if(index == 1)
               {
                  _ui["page1"]["pageNum"].text = "定时记录：赫尔卡探索舰队已抵达目标星系，计划执行████任务。我方主动脱离舰队，前往就近行星开展先锋能源补给任务，预计██标准时后抵达。\n……\n已抵达目标行星的高空层。提示：检测到丰富的甲烷气体及活跃的生物信号。与舰队进行第一次例行通讯。申请：驻留此地进行能源补给与科考任务。\n记录时间：██标准年。";
               }
               else if(index == 2)
               {
                  _ui["page1"]["pageNum"].text = "警告，飞船遭到不明袭击，船体严重受损。警告，防卫模式遭到屏蔽，向母舰发送求救信号……系统自检启动中，部分功能调用受限……母舰受到未知打击无法支援……飞船终端遭到电子入侵，陷…陷入瘫…瘫……瘫痪……\n距离上一条记录：██标准年。\n……\n警告，飞船再次遭到不明袭击，终端系统重新唤起，自检模式进行中，硬件层受损40%，飞船网络冗余数据过多，执行清除，回报，无法清除。请求：广播舰队求救信号，未接收到反馈信号。飞船执行静默模式，等待救援。\n距离上一条记录：█████标准年。";
               }
               else
               {
                  _ui["page1"]["pageNum"].text = "接收到求救信号，来源：赫尔卡星。执行唤醒程序，发送反馈信号。警告，剩余能源6%。关闭飞船智能系统，独立操控终端权限。增强信号发射频率，剩余能源1%，增强信号发射频率，剩余能源……\n距离上一条记录：███标准年。\n……\n…检测到能源输入中，重启飞船终端系统。提示：飞船验证系统已更新，已记录访客信息，判定，友好单位。更新记录：访客已离开。自检模式进行中，警告，剩余能源2%。为避免飞船强制进入静默模式，开始执行：全功率气体捕捉。\n距离上一条记录：███标准时。";
               }
               break;
            case "close1":
               _ui["page1"].visible = false;
               break;
            case "okayBtn":
               _ui["page1"].visible = false;
               break;
            case "close2":
               _ui["page2"].visible = false;
               break;
            case "confirmBtn":
               tempInt = int(_ui["curNum"].text);
               if(tempInt != 0)
               {
                  doAction("FlgeReq1",tempInt).then(function(e:SocketEvent):void
                  {
                     result = ByteArray(e.data).readInt();
                     if(result == 1)
                     {
                        if(forever_125166 == 0)
                        {
                           NpcDialog.show(5603,["嗯…看上去像是这艘飞船初次飞抵云霄星的记录。"],["…"],[function():void
                           {
                              NpcDialog.show(5603,["飞船的结构与塞西利亚星发现的科考飞船结构高度相似，应该也是来源于赫尔卡星的飞船。"],["…"],[function():void
                              {
                                 NpcDialog.show(5545,["从记录中来看也暂时挖掘不到额外的信息了，但是这个标准年…？博士，赫尔卡文明的历法是和我们赛尔历一致吗？"],["…"],[function():void
                                 {
                                    NpcDialog.show(5603,["如果从他们标准年来计算的话，或许他们飞抵云霄星的时间远比我们想象中的还要早。"],["…"],[function():void
                                    {
                                       NpcDialog.show(5603,["举个例子，赫尔卡历的一年，换算过来，是我们的赛尔历的一个月。"],["…"],[function():void
                                       {
                                          NpcDialog.show(5545,["也就是说，早在赛尔号未启航时，赫尔卡人就开展对其他星球的探索了？！"],["…"],[function():void
                                          {
                                             NpcDialog.show(5545,["赛尔号曾对赫尔卡文明进行过系统的调查，令人惊奇的地方不止于此。"],["…"],[function():void
                                             {
                                                NpcDialog.show(5603,["慢慢来吧，看看在之后的记录中，能不能找到别的信息。"],["好的。"],[function():void
                                                {
                                                   _ui["page1"].visible = true;
                                                   _ui["page1"]["pageNum"].text = "定时记录：赫尔卡探索舰队已抵达目标星系，计划执行████任务。我方主动脱离舰队，前往就近行星开展先锋能源补给任务，预计██标准时后抵达。\n……\n已抵达目标行星的高空层。提示：检测到丰富的甲烷气体及活跃的生物信号。与舰队进行第一次例行通讯。申请：驻留此地进行能源补给与科考任务。\n记录时间：██标准年。";
                                                }],false,null,true);
                                             }],false,null,true);
                                          }],false,null,true);
                                       }],false,null,true);
                                    }],false,null,true);
                                 }],false,null,true);
                              }],false,null,true);
                           }],false,null,true);
                        }
                        else if(forever_125166 == 1)
                        {
                           NpcDialog.show(5603,["这是两段不同时期的记录，这艘赫尔卡飞船都遭受了袭击。"],["…"],[function():void
                           {
                              NpcDialog.show(5603,["第二次很好确认，赛尔历39年，我们曾遭受过来自云霄星上的海盗袭击，并展开了一场战斗。"],["…"],[function():void
                              {
                                 NpcDialog.show(5545,["没错，当时我们还使用了加农炮-SC001，轻轻松松就击碎的海盗们构建的防护壁。"],["…"],[function():void
                                 {
                                    NpcDialog.show(5603,["还有一次是更早以前的遇袭记录，不过从时间跨度…似乎有点大。"],["…"],[function():void
                                    {
                                       NpcDialog.show(5545,["这应该也是海盗们的手笔，他们早早就控制了这艘飞船，并将它改造成为非作歹的工具"],["…"],[function():void
                                       {
                                          NpcDialog.show(5545,["连飞船的终端都遭到了入侵，飞船的控制权被夺取，那只休眠的能源型西塔似乎逃过了一劫……"],["…"],[function():void
                                          {
                                             NpcDialog.show(5603,["别难过，这次我们不就是把他们都救回来了吗？"],["…"],[function():void
                                             {
                                                NpcDialog.show(5603,["还有一段记录需要进一步解析，明天再来看看吧。"],["好的。"],[function():void
                                                {
                                                   _ui["page1"].visible = true;
                                                   _ui["page1"]["pageNum"].text = "警告，飞船遭到不明袭击，船体严重受损。警告，防卫模式遭到屏蔽，向母舰发送求救信号……系统自检启动中，部分功能调用受限……母舰受到未知打击无法支援……飞船终端遭到电子入侵，陷…陷入瘫…瘫……瘫痪……\n距离上一条记录：██标准年。\n……\n警告，飞船再次遭到不明袭击，终端系统重新唤起，自检模式进行中，硬件层受损40%，飞船网络冗余数据过多，执行清除，回报，无法清除。请求：广播舰队求救信号，未接收到反馈信号。飞船执行静默模式，等待救援。\n距离上一条记录：█████标准年。";
                                                }],false,null,true);
                                             }],false,null,true);
                                          }],false,null,true);
                                       }],false,null,true);
                                    }],false,null,true);
                                 }],false,null,true);
                              }],false,null,true);
                           }],false,null,true);
                        }
                        else
                        {
                           NpcDialog.show(5545,["这是……"],["…"],[function():void
                           {
                              NpcDialog.show(5603,["这只西塔收到了一支来源于赫尔卡星的求救信号……"],["…"],[function():void
                              {
                                 NpcDialog.show(5603,["以及最后一段记录中，明确记录了一个神秘人到访此处。"],["…"],[function():void
                                 {
                                    NpcDialog.show(5603,["神秘人将西塔激活，并更新了飞船的一系列的权限认证……"],["…"],[function():void
                                    {
                                       NpcDialog.show(5603,["等等，我得缓一下，这个信息量有点大。"],["…"],[function():void
                                       {
                                          NpcDialog.show(5545,["派特博士你还好吗？要不要喝点机油休息一下。"],["…"],[function():void
                                          {
                                             NpcDialog.show(5603,["快，你去将这个情况同步给罗杰船长。"],["…"],[function():void
                                             {
                                                NpcDialog.show(5563,["不用了，我就在这里了。"],["…"],[function():void
                                                {
                                                   NpcDialog.show(5545,["欸？罗杰船长，您怎么来了？"],["…"],[function():void
                                                   {
                                                      NpcDialog.show(5563,["派特博士说过今天是解析工作的最后一天，我觉得有必要亲自来看看情况。"],["…"],[function():void
                                                      {
                                                         NpcDialog.show(5563,["你们的解析结果我刚刚已经知晓了。很明显，信号的广播是刻意所为，但我们无法确定此人的最终目的。"],["…"],[function():void
                                                         {
                                                            NpcDialog.show(5563,["过去的云霄星一役，我们曾遭受过海盗们的袭击，或许这次从赫尔卡星发出的信号，也是宇宙海盗的诡计。"],["…"],[function():void
                                                            {
                                                               NpcDialog.show(5563,["因此，赛尔号的下一站将前往赫尔卡星，我们需要进一步探明这支求救信号的来源，避免坏情况的发生。"],["是！船长！"],[function():void
                                                               {
                                                                  _ui["page1"].visible = true;
                                                                  _ui["page1"]["pageNum"].text = "接收到求救信号，来源：赫尔卡星。执行唤醒程序，发送反馈信号。警告，剩余能源6%。关闭飞船智能系统，独立操控终端权限。增强信号发射频率，剩余能源1%，增强信号发射频率，剩余能源……\n距离上一条记录：███标准年。\n……\n…检测到能源输入中，重启飞船终端系统。提示：飞船验证系统已更新，已记录访客信息，判定，友好单位。更新记录：访客已离开。自检模式进行中，警告，剩余能源2%。为避免飞船强制进入静默模式，开始执行：全功率气体捕捉。\n距离上一条记录：███标准时。";
                                                               }],false,null,true);
                                                            }],false,null,true);
                                                         }],false,null,true);
                                                      }],false,null,true);
                                                   }],false,null,true);
                                                }],false,null,true);
                                             }],false,null,true);
                                          }],false,null,true);
                                       }],false,null,true);
                                    }],false,null,true);
                                 }],false,null,true);
                              }],false,null,true);
                           }],false,null,true);
                        }
                        refresh();
                     }
                     else if(result == 2)
                     {
                        _ui["mcc"].gotoAndStop(2);
                        _ui["mcc"]["mc1"]["mc"].play();
                     }
                     else
                     {
                        _ui["mcc"].gotoAndStop(3);
                        _ui["mcc"]["mc2"]["mc"].play();
                     }
                  });
               }
               else
               {
                  Alarm2.show("请输入1-99范围内的自然数。");
               }
         }
      }
   }
}

