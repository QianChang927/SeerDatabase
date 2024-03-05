package com.robot.core.manager
{
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.FriendsNoticeInfo;
   import com.robot.core.info.UserInfo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.text.TextField;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class FriendsNoticeManager
   {
      
      private static var _mainUI:MovieClip;
      
      private static var _noticeList:Array = [];
      
      private static var _userID:uint;
      
      private static var _isPlaying:Boolean = false;
      
      private static var _vipTips:MovieClip;
       
      
      public function FriendsNoticeManager()
      {
         super();
      }
      
      public static function getNotice(param1:FriendsNoticeInfo) : void
      {
         _noticeList.push(param1);
         if(UIManager.getMovieClip("vip_tips"))
         {
            if(!_isPlaying)
            {
               showNotice(_noticeList);
            }
         }
         else
         {
            EventManager.addEventListener("sbbug",sbBugHandle);
         }
      }
      
      private static function sbBugHandle(param1:Event) : void
      {
         EventManager.removeEventListener("sbbug",sbBugHandle);
         if(!_isPlaying)
         {
            showNotice(_noticeList);
         }
      }
      
      private static function showNotice(param1:Array) : void
      {
         var info:FriendsNoticeInfo = null;
         var t:uint = 0;
         var name:String = null;
         var i:UserInfo = null;
         var txt:TextField = null;
         var t1:uint = 0;
         var arr:Array = param1;
         if(arr.length > 0)
         {
            info = arr.shift() as FriendsNoticeInfo;
            if(info.type == 4)
            {
               if(_vipTips == null)
               {
                  _vipTips = UIManager.getMovieClip("vip_tips");
                  _vipTips.x = 590;
                  _vipTips.y = 471;
               }
               LevelManager.iconLevel.addChild(_vipTips);
               t = setTimeout(function():void
               {
                  TweenLite.to(_vipTips,2,{
                     "alpha":0,
                     "onComplete":function():void
                     {
                        DisplayUtil.removeForParent(_vipTips);
                        _vipTips.alpha = 1;
                        showNotice(_noticeList);
                     }
                  });
                  clearTimeout(t);
               },10000);
            }
            else
            {
               name = info.userID.toString();
               for each(i in RelationManager.getFriendInfos())
               {
                  if(i.userID == info.userID)
                  {
                     name = i.nick;
                  }
               }
               _userID = info.userID;
               if(_mainUI == null)
               {
                  _mainUI = UIManager.getMovieClip("FriendsNoticeMC");
               }
               _mainUI.x = 480;
               _mainUI.y = 100;
               LevelManager.iconLevel.addChild(_mainUI);
               txt = _mainUI["txt"] as TextField;
               switch(info.type)
               {
                  case 1:
                     txt.htmlText = "你的好友<font color=\'#ff0000\'>" + name + "</font>(" + info.userID + ")刚刚击败了<font color=\'#ff0000\'>" + PetXMLInfo.getName(info.data) + "</font>！";
                     break;
                  case 2:
                     txt.htmlText = "你的好友<font color=\'#ff0000\'>" + name + "</font>(" + info.userID + ")刚刚获得了<font color=\'#ff0000\'>" + PetXMLInfo.getName(info.data) + "</font>！";
                     break;
                  case 3:
                     txt.htmlText = "<font color=\'#ff0000\'>" + name + "</font>(" + info.userID + ")刚刚<font color=\'#ff0000\'>分享了一份荣耀给你</font>！";
               }
               _isPlaying = true;
               _mainUI.gotoAndPlay(2);
               t1 = setTimeout(function():void
               {
                  txt.visible = false;
                  TweenLite.to(_mainUI,2,{
                     "alpha":0,
                     "onComplete":onTwoTweenComplete
                  });
                  clearTimeout(t1);
               },6000);
            }
         }
         else
         {
            _isPlaying = false;
         }
      }
      
      private static function onTwoTweenComplete() : void
      {
         DisplayUtil.removeForParent(_mainUI);
         showNotice(_noticeList);
      }
   }
}
