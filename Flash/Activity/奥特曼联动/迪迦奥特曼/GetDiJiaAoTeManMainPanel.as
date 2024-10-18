package com.robot.module.app
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.events.DataEvent;
   import flash.external.ExternalInterface;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class GetDiJiaAoTeManMainPanel extends ActivityModel
   {
      private var itemNum:int;
      
      private var pro:int;
      
      private var pet:Boolean;
      
      private var infos:Array;
      
      private var curPage:int;
      
      private var lastPro:int;
      
      private var first:Boolean = true;
      
      private var boos:Array;
      
      private var lastDailyNum:int;
      
      public function GetDiJiaAoTeManMainPanel()
      {
         super();
         resUrl = "2024/1018/GetDiJiaAoTeManMainPanel";
         configUrl = "2024/1018/GetDiJiaAoTeMan";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1018迪迦奥特曼输出","进入【迪迦奥特曼】活动主界面","2024运营活动");
         super.show();
         _ui["sub"].visible = false;
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,this.moduleCloseHandle);
         _ui["movie"].gotoAndStop(1);
         _ui["movie"].visible = false;
         _ui["movie"].addFrameScript(25,refresh);
      }
      
      private function moduleCloseHandle(e:DataEvent) : void
      {
         var url:String = e.data;
         if(url.indexOf("PetBag2017") != -1)
         {
            refresh();
         }
      }
      
      override protected function updatePanel() : void
      {
         if(_ui == null)
         {
            return;
         }
         this.pet = getValue("pet") > 0 || getValue("petClass") > 0;
         var tmpPro:int = int(getValue("pro"));
         this.lastPro = this.pro;
         if(tmpPro > this.lastPro && !this.first)
         {
            if(tmpPro >= 150)
            {
               doAction("alarm1");
            }
            else
            {
               doAction("alarm2",tmpPro - this.lastPro);
            }
         }
         this.itemNum = getValue("numTxt");
         this.pro = tmpPro;
         _ui["numTxt"].text = this.itemNum;
         _ui["pro"].text = this.pro + "/150";
         _ui["mc"].gotoAndStop(int(this.pro / 40) + 1);
         if(this.pro >= 150)
         {
            _ui["mc"].gotoAndStop(5);
         }
         _ui["btnmc"].gotoAndStop(this.pet ? 3 : (this.pro >= 150 ? 2 : 1));
         var dailyNum:int = int(getValue("dailyNum"));
         _ui["sub"]["txt"].text = dailyNum + "/10";
         if(!this.first && dailyNum >= 10 && this.lastDailyNum < 10)
         {
            doAction("alarm4");
         }
         this.lastDailyNum = dailyNum;
         CommonUI.setEnabled(_ui["btn"],!this.pet && this.pro < 150);
         CommonUI.setEnabled(_ui["buy"],!this.pet && this.pro < 150);
         this.first = false;
         this.getTaskInfo();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var isWeseer:Boolean = false;
         var url:String = null;
         var obj:Object = null;
         var ua:String = null;
         var appName:String = null;
         var pageName:String = null;
         var channel:String = null;
         var defalutPet:PetInfo = null;
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         var pindex:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("UltramanSeriesGoToMapPanel");
               break;
            case "web":
               StatManager.sendStat2014("1018迪迦奥特曼输出","点击【网页活动】按钮","2024运营活动");
               isWeseer = false;
               if(ExternalInterface.available)
               {
                  ua = ExternalInterface.call("navigator.userAgent.toLowerCase");
                  appName = ExternalInterface.call("navigator.appName.toLowerCase");
                  pageName = ExternalInterface.call("window.location.pathname.toLowerCase");
                  obj = ExternalInterface.call("getUrlParams");
                  channel = "";
                  if(Boolean(obj) && Boolean(obj.hasOwnProperty("from")))
                  {
                     if(obj["from"] == "we_seer")
                     {
                        isWeseer = true;
                     }
                  }
               }
               url = "https://seer.61.com/events/seer_ultraman_activity/";
               if(isWeseer)
               {
                  url = "https://seer.61.com/events/seer_ultraman_activity/?w=960&h=560";
               }
               navigateToURL(new URLRequest(url),"_blank");
               break;
            case "btn":
               if(this.itemNum < 1)
               {
                  doAction("alarm");
               }
               else
               {
                  SocketConnection.sendByQueue(41486,[2,0],function(e:SocketEvent):void
                  {
                     playMovie();
                  });
               }
               break;
            case "info":
               KTool.showPetInfoPanel(4678);
               break;
            case "onekey":
               KTool.buyProductWithExchange(261026,14411,function():void
               {
                  refresh();
               });
               break;
            case "reward":
               SocketConnection.sendByQueue(41486,[3,0],function(e:SocketEvent):void
               {
                  refresh();
               });
               break;
            case "go":
               this.curPage = 0;
               this.getTaskInfo();
               _ui["sub"].visible = true;
               break;
            case "pclose":
               _ui["sub"].visible = false;
               break;
            case "pre":
               this.showPage(this.curPage - 1);
               break;
            case "next":
               this.showPage(this.curPage + 1);
               break;
            case "taskGo":
               switch(pindex)
               {
                  case 0:
                     break;
                  case 2:
                     this.hide();
                     ModuleManager.showAppModule("MarkMachine0707Panel");
                     break;
                  case 3:
                     this.hide();
                     ModuleManager.showAppModule("NewTaiTanHoleMainPanel");
                     break;
                  case 4:
                     this.hide();
                     ModuleManager.showAppModule("TrainingCollectionPanel");
                     break;
                  case 5:
                     this.hide();
                     MapManager.changeMapWithCallback(1095,function():void
                     {
                        ModuleManager.showAppModule("PeakJihad2023MainPanel");
                     });
               }
               break;
            case "taskReward":
               if(pindex == 0 && !this.boos[pindex] || pindex == 1 && !this.boos[pindex])
               {
                  if(pindex == 0)
                  {
                     doAction("alarm3");
                  }
                  else if(PetManager.defaultTime > 0)
                  {
                     defalutPet = PetManager.getPetInfo(PetManager.defaultTime);
                     if(PetXMLInfo.getType(defalutPet.id) != "12")
                     {
                        this.setDefault();
                     }
                  }
                  else
                  {
                     this.setDefault();
                  }
                  return;
               }
               SocketConnection.sendByQueue(41486,[1,pindex + 1],function(e:SocketEvent):void
               {
                  refresh();
               });
               break;
            case "buy":
               ModuleManager.showAppModule("MultiBuyPanel",{
                  "productID":261027,
                  "iconID":1726244,
                  "exchangeID":14410,
                  "callFunction":function():void
                  {
                     refresh();
                  }
               });
         }
      }
      
      private function playMovie() : void
      {
         _ui["movie"].visible = true;
         LevelManager.closeAllMouseEvent();
         AnimateManager.playMcAnimate(_ui["movie"],1,"",function():void
         {
            if(_ui == null)
            {
               return;
            }
            _ui["movie"].visible = false;
            _ui["movie"].gotoAndStop(1);
            LevelManager.openMouseEvent();
         });
      }
      
      private function setDefault() : void
      {
         doAction("alert").then(function():void
         {
            PetBagControllerNew.showByBuffer();
         });
      }
      
      private function getTaskInfo() : void
      {
         this.boos = [];
         SocketConnection.sendByQueue(41485,[],function(e:SocketEvent):void
         {
            var obj:Object = null;
            if(_ui == null)
            {
               return;
            }
            var byte:ByteArray = e.data as ByteArray;
            var len:int = int(byte.readUnsignedInt());
            infos = [];
            for(var j:int = 0; j < len; j++)
            {
               obj = {};
               obj.id = byte.readUnsignedInt();
               obj.pro = byte.readUnsignedInt();
               obj.max = byte.readUnsignedInt();
               obj.state = byte.readUnsignedInt();
               infos.push(obj);
               boos.push(obj.state == 1);
            }
            showPage(curPage);
         });
      }
      
      private function showPage(page:int) : void
      {
         var info:Object = null;
         if(page < 0)
         {
            page = 0;
         }
         if(page > 1)
         {
            page = 1;
         }
         this.curPage = page;
         _ui["sub"]["page"].text = page + 1 + "/2";
         _ui["sub"]["mc"].gotoAndStop(page + 1);
         var start:int = page * 3;
         var end:int = (page + 1) * 3;
         for(var i2:int = start; i2 < end; i2++)
         {
            if(i2 < this.infos.length)
            {
               info = this.infos[i2];
               if(Boolean(_ui["sub"]["mc"]["title_" + i2]))
               {
                  _ui["sub"]["mc"]["title_" + i2].gotoAndStop(info.state == 2 ? 3 : (info.state == 1 ? 2 : 1));
               }
               if(Boolean(_ui["sub"]["mc"]["bg_" + i2]))
               {
                  _ui["sub"]["mc"]["bg_" + i2].gotoAndStop(info.state == 2 ? 3 : (info.state == 1 ? 2 : 1));
               }
               if(Boolean(_ui["sub"]["mc"]["btnmc_" + i2]))
               {
                  _ui["sub"]["mc"]["btnmc_" + i2].gotoAndStop(info.state == 2 ? 3 : (info.state == 1 ? 2 : 1));
                  if(i2 == 0 || i2 == 1)
                  {
                     _ui["sub"]["mc"]["btnmc_" + i2].gotoAndStop(info.state == 2 ? 3 : (info.state == 1 ? 2 : 2));
                  }
               }
               if(Boolean(_ui["sub"]["mc"]["pro_" + i2]))
               {
                  _ui["sub"]["mc"]["pro_" + i2].text = info.pro + "/" + info.max;
               }
            }
         }
      }
      
      override public function hide() : void
      {
         _ui["movie"].addFrameScript(25,null);
         ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,this.moduleCloseHandle);
         this.infos = null;
         super.hide();
      }
   }
}

