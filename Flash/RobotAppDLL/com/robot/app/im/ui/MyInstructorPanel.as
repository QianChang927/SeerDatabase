package com.robot.app.im.ui
{
   import com.robot.app.bag.BagClothPreview;
   import com.robot.app.im.IMController;
   import com.robot.app.im.talk.TalkPanelManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.ClothPreview;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.uic.UIScrollBar;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MyInstructorPanel extends Sprite
   {
       
      
      private var _mainUI:MovieClip;
      
      private var _scrollBar:UIScrollBar;
      
      private var _listInfo:Array;
      
      private const totalNum:int = 12;
      
      private var lastBtn:int = -1;
      
      public function MyInstructorPanel()
      {
         var _loc2_:MovieClip = null;
         this._listInfo = [];
         super();
         this._mainUI = UIManager.getMovieClip("NewInstructor_ListUI");
         addChild(this._mainUI);
         this._scrollBar = new UIScrollBar(this._mainUI["barBall"],this._mainUI["barBg"],this.totalNum,this._mainUI["upBtn"],this._mainUI["downBtn"]);
         this._scrollBar.wheelObject = this;
         this._scrollBar.totalLength = this._mainUI["mainlist"]["list"].height;
         this._scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         SocketConnection.addCmdListener(CommandID.INSTRUCTOR_GETMYLIST,this.onGetInfo);
         SocketConnection.send(CommandID.INSTRUCTOR_GETMYLIST);
         SocketConnection.addCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,this.onGetIDInfo);
         this._mainUI.addEventListener(MouseEvent.CLICK,this.onClicked);
         var _loc1_:int = 0;
         while(_loc1_ < this.totalNum)
         {
            _loc2_ = this.getListItem(_loc1_);
            _loc2_.mouseEnabled = _loc2_.mouseChildren = false;
            _loc2_["nametxt"].text = "";
            _loc2_["lvtxt"].text = "";
            _loc2_["lvbar"].visible = false;
            _loc1_++;
         }
      }
      
      private function onClicked(param1:MouseEvent) : void
      {
         var a:Array = null;
         var e:MouseEvent = param1;
         switch(e.target)
         {
            case this._mainUI["closeBtn"]:
               this.destroy();
               IMController.panel.hide();
               break;
            case this._mainUI["infoBtn"]:
               SocketConnection.send(1022,86050296);
               ModuleManager.showModule(ClientConfig.getAppModule("NewInstructorInfo"),"正在打开....");
               break;
            case this._mainUI["removeBtn"]:
               if(this.lastBtn != -1)
               {
                  Alert.show("确认要跟他/她解除教官/学员关系吗？",function():void
                  {
                     if(lastBtn == 0)
                     {
                        Alert.show("解除关系后6小时内你将无法申请新的教官！并且你们的亲密度将清零！确定要这样做嘛？",function():void
                        {
                           SocketConnection.addCmdListener(CommandID.INSTRUCTOR_DELETEINS,function():void
                           {
                              SocketConnection.removeCmdListener(CommandID.INSTRUCTOR_DELETEINS,arguments.callee);
                              var _loc2_:MovieClip = getListItem(lastBtn);
                              _loc2_["nametxt"].text = "";
                              _loc2_["lvtxt"].text = "";
                              _loc2_["lvbar"].visible = false;
                              DisplayUtil.removeAllChild(_loc2_["con"]);
                              _loc2_.filters = [];
                              _loc2_.mouseChildren = _loc2_.mouseEnabled = false;
                              lastBtn = -1;
                           });
                           SocketConnection.send(CommandID.INSTRUCTOR_DELETEINS);
                        });
                     }
                     else
                     {
                        Alert.show("解除关系后6小时内你将无法申请新的学员！并且你们的亲密度将清零！确定要这样做嘛？",function():void
                        {
                           SocketConnection.addCmdListener(CommandID.INSTRUCTOR_DELETESTU,function():void
                           {
                              SocketConnection.removeCmdListener(CommandID.INSTRUCTOR_DELETESTU,arguments.callee);
                              var _loc2_:MovieClip = getListItem(lastBtn);
                              _loc2_["nametxt"].text = "";
                              _loc2_["lvtxt"].text = "";
                              _loc2_["lvbar"].visible = false;
                              DisplayUtil.removeAllChild(_loc2_["con"]);
                              _loc2_.filters = [];
                              _loc2_.mouseChildren = _loc2_.mouseEnabled = false;
                              lastBtn = -1;
                           });
                           SocketConnection.send(CommandID.INSTRUCTOR_DELETESTU,_listInfo[lastBtn][0]);
                        });
                     }
                  });
               }
               else
               {
                  Alarm.show("先选择一个用户！");
               }
               break;
            case this._mainUI["faqBtn"]:
               SocketConnection.send(1022,86050295);
               ModuleManager.showModule(ClientConfig.getAppModule("NewInstructorFAQ"),"正在打开....");
               this.destroy();
               break;
            default:
               a = (e.target.name as String).split("_");
               if(e.target.name == "talkBtn")
               {
                  a = (e.target.parent.name as String).split("_");
                  if(a[1] == 0)
                  {
                     if(this._listInfo[0] != 0)
                     {
                        TalkPanelManager.showTalkPanel(this._listInfo[0]);
                     }
                  }
                  else if(this._listInfo[a[1]])
                  {
                     TalkPanelManager.showTalkPanel(this._listInfo[a[1]][0]);
                  }
                  break;
               }
               if(!(a[0] == "people" && a[1] != 1))
               {
                  if(!e.target.parent)
                  {
                     break;
                  }
                  a = (e.target.parent.name as String).split("_");
                  if(!(a[0] == "people" && a[1] != 1))
                  {
                     break;
                  }
               }
               if(this.lastBtn != -1)
               {
                  this.getListItem(this.lastBtn).filters = [];
               }
               if(this._listInfo[a[1]])
               {
                  this.lastBtn = a[1];
                  this.getListItem(a[1]).filters = [new GlowFilter(16776960,1,20,20,2,1,false,false)];
               }
               else
               {
                  this.lastBtn = -1;
               }
               break;
         }
      }
      
      private function onGetInfo(param1:SocketEvent) : void
      {
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:MovieClip = null;
         var _loc8_:Number = NaN;
         SocketConnection.removeCmdListener(CommandID.INSTRUCTOR_GETMYLIST,this.onGetInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._listInfo.push(_loc2_.readUnsignedInt());
         this._listInfo.push(MainManager.actorID);
         this.addHead(this.getListItem(1)["con"],MainManager.actorInfo.clothes);
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = int(_loc2_.readUnsignedInt());
            _loc6_ = int(_loc2_.readUnsignedInt());
            this._listInfo.push([_loc5_,_loc6_]);
            _loc4_++;
         }
         _loc4_ = 0;
         while(_loc4_ < this.totalNum)
         {
            _loc7_ = this.getListItem(_loc4_);
            _loc7_.mouseEnabled = _loc7_.mouseChildren = false;
            if(_loc4_ == 0)
            {
               if(this._listInfo[0])
               {
                  _loc7_["nametxt"].text = this._listInfo[0];
                  SocketConnection.send(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,this._listInfo[0]);
                  _loc7_.buttonMode = true;
               }
               else
               {
                  _loc7_["nametxt"].text = "";
               }
               _loc7_["lvtxt"].text = "";
               _loc7_["lvbar"].visible = false;
            }
            else if(_loc4_ == 1)
            {
               _loc7_["nametxt"].text = MainManager.actorInfo.nick;
               _loc7_["lvtxt"].text = "";
               _loc7_["lvbar"].visible = false;
            }
            else if(this._listInfo[_loc4_])
            {
               _loc7_["nametxt"].text = this._listInfo[_loc4_][0];
               if((_loc8_ = this._listInfo[_loc4_][1] / 3600) >= 192)
               {
                  _loc7_["lvtxt"].text = "Lv5";
                  _loc7_["lvbar"].scaleX = 1;
               }
               else if(_loc8_ >= 96)
               {
                  _loc7_["lvtxt"].text = "Lv4";
                  _loc7_["lvbar"].scaleX = (_loc8_ - 96) / 96;
               }
               else if(_loc8_ >= 48)
               {
                  _loc7_["lvtxt"].text = "Lv3";
                  _loc7_["lvbar"].scaleX = (_loc8_ - 48) / 48;
               }
               else if(_loc8_ >= 24)
               {
                  _loc7_["lvtxt"].text = "Lv2";
                  _loc7_["lvbar"].scaleX = (_loc8_ - 24) / 24;
               }
               else
               {
                  _loc7_["lvtxt"].text = "Lv1";
                  _loc7_["lvbar"].scaleX = _loc8_ / 24;
               }
               _loc7_["lvbar"].visible = true;
               SocketConnection.send(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,this._listInfo[_loc4_][0]);
               _loc7_.buttonMode = true;
            }
            else
            {
               _loc7_["nametxt"].text = "";
               _loc7_["lvtxt"].text = "";
               _loc7_["lvbar"].visible = false;
            }
            _loc4_++;
         }
      }
      
      private function onGetIDInfo(param1:SocketEvent) : void
      {
         var _loc7_:int = 0;
         var _loc8_:MovieClip = null;
         var _loc9_:uint = 0;
         var _loc10_:uint = 0;
         var _loc11_:int = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:String = _loc2_.readUTFBytes(16);
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:Array = [];
         _loc7_ = 0;
         while(_loc7_ < _loc5_)
         {
            _loc9_ = _loc2_.readUnsignedInt();
            _loc10_ = _loc2_.readUnsignedInt();
            _loc6_.push(new PeopleItemInfo(_loc9_,_loc10_));
            _loc7_++;
         }
         if(this._listInfo[0] == _loc3_)
         {
            _loc8_ = this.getListItem(0);
            this.addHead(_loc8_["con"],_loc6_);
            _loc8_["nametxt"].text = _loc4_;
            _loc8_.mouseEnabled = _loc8_.mouseChildren = true;
         }
         else
         {
            _loc11_ = 2;
            while(_loc11_ < this._listInfo.length)
            {
               if(this._listInfo[_loc11_][0] == _loc3_)
               {
                  _loc8_ = this.getListItem(_loc11_);
                  this.addHead(_loc8_["con"],_loc6_);
                  _loc8_["nametxt"].text = _loc4_;
                  _loc8_.mouseEnabled = _loc8_.mouseChildren = true;
               }
               _loc11_++;
            }
         }
      }
      
      private function addHead(param1:Sprite, param2:Array) : void
      {
         var _loc3_:Sprite = UIManager.getSprite("ComposeMC");
         _loc3_.scaleX = _loc3_.scaleY = 0.1;
         _loc3_.x += 1;
         _loc3_.y -= 4;
         _loc3_.mouseEnabled = false;
         _loc3_.mouseChildren = false;
         DisplayUtil.stopAllMovieClip(_loc3_,1);
         DisplayUtil.removeAllChild(param1);
         param1.addChild(_loc3_);
         var _loc4_:BagClothPreview;
         (_loc4_ = new BagClothPreview(_loc3_,null,ClothPreview.MODEL_SHOW)).changeColor(MainManager.actorInfo.color);
         _loc4_.showCloths(param2);
      }
      
      private function getListItem(param1:int) : MovieClip
      {
         return this._mainUI["mainlist"]["list"]["people_" + param1];
      }
      
      private function onScrollMove(param1:MouseEvent) : void
      {
         this._mainUI["mainlist"]["list"].y = -this._scrollBar.index * 0.7;
      }
      
      public function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,this.onGetIDInfo);
         SocketConnection.removeCmdListener(CommandID.INSTRUCTOR_GETMYLIST,this.onGetInfo);
         if(this._scrollBar)
         {
            this._scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
            this._scrollBar.destroy();
            this._scrollBar = null;
         }
         if(this._mainUI)
         {
            this._mainUI.removeEventListener(MouseEvent.CLICK,this.onClicked);
            DisplayUtil.removeForParent(this._mainUI);
            this._mainUI = null;
         }
         this._listInfo = null;
      }
   }
}
